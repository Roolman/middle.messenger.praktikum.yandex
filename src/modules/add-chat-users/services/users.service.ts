import { UsersApi } from "../../../api/users.api";
import { User } from "../../../types/state/user";
import { Observable } from "../../../utils/classes/observable";
import { Subject } from "../../../utils/classes/subject";


export class AddChatUsersService {

    private _usersApi: UsersApi

    public usersObservable: Observable
    private _usersSubject: Subject<User[] | null>
    private _users: User[] | null


    constructor() {

        this._usersApi = new UsersApi()

        this._users = null
        this._usersSubject = new Subject()
        this.usersObservable = this._usersSubject.asObservable()
    }

    getUsersByLogin(login: string): void {
        this._usersApi
            .requestUsers(login)
            .subscribe(
                (users: User[]) => {
                    this._users = users
                    this._usersSubject.next(this._users)
                }
            )
    }

}