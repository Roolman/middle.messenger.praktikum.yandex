import "./add-chat-users.scss"
import tmpl from "./add-chat-users.tmpl"

import { Button } from "../../components/button/index"
import { Component } from "../../utils/classes/component"
import { ComponentChild, ComponentProps } from "../../types/components/component"
import { Input } from "../../components/input"
import { User } from "../../types/state/user"
import { UsersListItem } from "./components/users-list"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import { AddChatUsersService } from "./services/users.service"
import isEqual from "../../utils/helpers/isEqual"

type AddChatUsersProps = ComponentProps & {
    selectedUsers?: User[]
    fetchedUsers?: ComponentChild<UsersListItem>[]
    isModal?: boolean
    nextButtonTitle?: string
    onNextButton: Function
}

export class AddChatUsers extends Component {
    props: AddChatUsersProps

    prevInput: Input
    userNameInput: Input
    nextButton: Button

    seclectedUsersContainer: HTMLDivElement

    @Inject(AddChatUsersService)
    private _userService: AddChatUsersService

    constructor(props?: AddChatUsersProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: AddChatUsersProps): AddChatUsersProps {
        return {
            ...props,
            componentClassName: props.isModal ? "modal-container" : "modal-content",
            selectedUsers: [],
            fetchedUsers: [],
            children: [
                {
                    name: "userNameInput",
                    component: new Input({
                        name: "userName",
                        title: "Логин",
                        type: "text",
                        styles: {
                            width: "100%"
                        },
                        isValidationHidden: true
                    })
                },
                {
                    name: "nextButton",
                    component: new Button({
                        title: props.nextButtonTitle || "Далее",
                        styles: {
                            width: "100%"
                        }
                    })
                },
            ]
        }
    }

    componentDidInit() {
        this.hide()
        if(this.props.isModal) {
            this._subscriptions.push(
                Observable
                .fromEvent(this.element, "click")
                .subscribe(
                    (e: Event) => {
                        const target = e.target as HTMLElement
                        if(target.classList.contains(this.props.componentClassName  as string)) {
                            this.hide()
                        }
                    }
                )
            )
        }
    }

    componentDidRender() {
        this.userNameInput.input.focus()
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            this.userNameInput
                .onValueChange
                .throttle(500)
                .subscribe(
                    (value: string) => {
                        this._userService.getUsersByLogin(value)
                    }
                )
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.nextButton.element, 'click')
            .subscribe(
                (e: Event) => {
                    e.preventDefault()
    
                    this.props.onNextButton()
                }
        ))
        this._onMountSubscriptions.push(
            this._userService
                .usersObservable
                .subscribe(
                    (users: User[]) => this._updateFetchedUsers(users)
                )
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.seclectedUsersContainer, "click")
            .subscribe(
                (e: Event) => {
                    const target = e.target as HTMLElement
                    const cancelButton = target.closest(".add-chat__selected-user-cancel-icon")
                    // Тогда удаляем из списка
                    if(cancelButton) {
                        const selectedUser = target.closest(".add-chat__selected-user-container") as HTMLElement
                        const login = selectedUser.getElementsByTagName("span")[0].textContent
                        const selectedUsers = this.props.selectedUsers?.filter(x => x.login !== login)
                        this.props.fetchedUsers?.map(x => {
                            if(x.component.props.user.login === login) {
                                x.component.setProps({disabled: false})
                            }
                            return x
                        })
                        this.setProps({
                            selectedUsers: selectedUsers
                        })
                    }
                }
            )
        )        
    }

    private _updateFetchedUsers(users: User[]) {
        const usersList = this._getChildComponentsFromUserList(users)
        this.setProps({
            fetchedUsers: usersList
        })
    }

    private _getChildComponentsFromUserList(users: User[]): ComponentChild<UsersListItem>[] {
        const usersList = users.map(
            (u: User, i: number): ComponentChild<UsersListItem> => {
                let disabled = false
                // Если юзер уже есть в списке выбранных, то дисейблим его
                const selectedUsersLength = this.props.selectedUsers?.length
                if(selectedUsersLength) {
                    const selectedUsers = this.props.selectedUsers as User[]
                    if(selectedUsersLength === 1) {
                        disabled = isEqual(u, selectedUsers[0])
                    }
                    else {
                        disabled = Boolean(selectedUsers.reduce(
                            (acc, val, i): any => {
                                if(i > 1) {
                                    return acc || isEqual(u, val)
                                }
                                else {
                                    return isEqual(u, acc) || isEqual(u, val)
                                }
                            }
                        ))
                    }
                }
                return {
                    name: `usersListItem__${i}`,
                    component: new UsersListItem({
                        user: u,
                        onAddButtonFunc: () => {
                            this.setProps({
                                selectedUsers: [
                                    ...(this.props.selectedUsers || []),
                                    u
                                ]
                            })
                        },
                        disabled
                    })
                }
            }
        )
        // Обновляем children компонента для ререндера
        if (this.props.children) {
            this.props.children = this.props.children.filter(
                (x) => !x.name.includes("usersListItem"),
            )
            this.props.children.push(...usersList)
        }
        return usersList
    }
}