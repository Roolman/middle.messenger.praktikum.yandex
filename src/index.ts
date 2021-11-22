import "../node_modules/font-awesome/scss/font-awesome.scss"
import "./styles/index.scss"
import * as Handlebars from "handlebars"

import ServiceLocator from "./services/core/serviceLocator"
import { ChatsService } from "./services/state/chats.service"
import { MutationsObservation } from "./services/core/mutationObserver"

import Router from "./services/core/router"
import { PAGES } from "./services/core/navigation"
import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register"
import { MainPage } from "./pages/main"
import { ProfilePage } from "./pages/profile"
import { Error404Page } from "./pages/errors/404"
import { Error500Page } from "./pages/errors/500"
import { ChatSettings } from "./pages/chat-settings"
import { UserService } from "./services/state/user.service"
import { AuthGuard } from "./utils/guards/auth.guard"
import { SnackBarService } from "./services/core/snackbar"
import { AddChatUsersService } from "./modules/add-chat-users/services/users.service"
import { ChatSelectedGuard } from "./utils/guards/chat-selected.guard"

function registerServices() {
    ServiceLocator.registerService(MutationsObservation, new MutationsObservation())
    ServiceLocator.registerService(SnackBarService, new SnackBarService("body"))

    ServiceLocator.registerService(UserService, new UserService())
    ServiceLocator.registerService(ChatsService, new ChatsService())

    ServiceLocator.registerService(AddChatUsersService, new AddChatUsersService())
}

function initRouter() {
    const authGuard = new AuthGuard()
    const notAuthGuard = new AuthGuard().invert()
    const chatSelectedGuard = new ChatSelectedGuard()
    Router
        .use(PAGES.LOGIN, LoginPage, [notAuthGuard])
        .use(PAGES.REGISTER, RegisterPage, [notAuthGuard])
        .use(PAGES.MAIN, MainPage, [authGuard])
        .use(PAGES.PROFILE, ProfilePage, [authGuard])
        .use(PAGES.CHATSETTINGS, ChatSettings, [authGuard, chatSelectedGuard])
        .use(PAGES.ERROR404, Error404Page)
        .use(PAGES.ERROR500, Error500Page)
        .start()
}

document.addEventListener("DOMContentLoaded", () => {
    registerServices()
    initRouter()
})

// Глобальный хэлпер
Handlebars.registerHelper(
    "if_eq",
    function (a: unknown, b: unknown, opts: Handlebars.HelperOptions) {
        if (a === b) {
            return opts.fn(this)
        }
        return opts.inverse(this)
    },
)

// Отключаем дефолтные подсказки
document.addEventListener("invalid", (function () {
    return function (e: Event) {
        e.preventDefault()
        console.log("test 2")
    }
}()), true)
