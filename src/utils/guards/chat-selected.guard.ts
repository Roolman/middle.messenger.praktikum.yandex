import { Inject } from "../decorators/inject";
import Router from "../../services/core/router"
import { PAGES } from "../../services/core/navigation";
import { ChatData, ChatsService } from "../../services/state/chats.service";

export interface Guard {
    checkAccess: () => boolean
    actionOnNoAccess: () => void
}

export class ChatSelectedGuard implements Guard {

    @Inject(ChatsService)
    private _chatsService: ChatsService
    private _chat: ChatData

    constructor() {
        this._chatsService.chatObservable.subscribe(
            (chat: ChatData) => {
                this._chat = chat
            }
        )
    }

    checkAccess(): boolean {
        return Boolean(this._chat)
    }

    actionOnNoAccess(): void {
        Router.go(PAGES.MAIN)
    }
}