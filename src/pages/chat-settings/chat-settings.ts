import { Component, ComponentProps } from "../../utils/classes/component";

import tmpl from "./chat-settings.tmpl"
import "./chat-settings.scss"
import { Button } from "../../components/button";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button";
import { ChangeAvatar } from "../../modules/change-avatar";
import { ChatData, ChatsService } from "../../services/state/chats.service";
import { Inject } from "../../utils/decorators/inject";
import { Observable } from "../../utils/classes/observable";
import Router from "../../services/core/router"
import { PAGES } from "../../services/core/navigation";
import { ChatView } from "./components/chat-view";

type ChatSettingsProps = ComponentProps & {

}

export class ChatSettings extends Component {

    props: ChatSettingsProps

    // Кнопки
    returnButton: Button
    // Вернуться в профиль
    profileReturn: HTMLElement
    // Модуль смены аватара
    сhangeAvatar: ChangeAvatar

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ChatSettingsProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatSettingsProps): ChatSettingsProps {
        return {
            ...props,
            profileIsEditable: false,
            changePasswordFormIsShown: false,
            componentClassName: "settings",
            children: [
                {
                    name: "сhangeAvatar",
                    component: new ChangeAvatar(),
                },
                {
                    name: "returnButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-arrow-left",
                    }),
                },
                {
                    name: "chatView",
                    component: new ChatView({
                        chat: this._chatsService.getSelectedChat(),
                        chatId: props.routeData?.data || '',
                        // onEditDataButton: () => {
                        //     // Переходим в режим редактирования
                        //     this.setProps({
                        //         changePasswordFormIsShown: false,
                        //         profileIsEditable: true,
                        //     })
                        // },
                        // onChangePasswordButton: () => {
                        //     this.setProps({
                        //         changePasswordFormIsShown: true,
                        //         profileIsEditable: true,
                        //     })
                        // },
                        onAvatar: () => {
                            this.сhangeAvatar.show()
                        }
                    })
                }
            ],
        }
    }

    componentDidInit() {
        if(!this.props.routeData) {
            Router.go(PAGES.MAIN)
        }
    }

    componentDidMount() {
        // Перейти к чатам
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileReturn, "click")
                .subscribe(
                    () => Router.go(PAGES.MAIN),
                ),
        )
    }
}