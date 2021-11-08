import "../node_modules/font-awesome/scss/font-awesome.scss"
import "./styles/index.scss"
import * as Handlebars from "handlebars"

import ServiceLocator from "./services/core/serviceLocator"
import { ChatsService } from "./services/state/chats.service"
import { MutationsObservation } from "./services/core/mutationObserver"
import { ProfileService } from "./services/state/profile.service"

import Router from "./services/core/router"
import { PAGES } from "./services/core/navigation"
import { LoginPage } from "./pages/login"
import { RegisterPage } from "./pages/register"
import { MainPage } from "./pages/main"
import { ProfilePage } from "./pages/profile"
import { Error404Page } from "./pages/errors/404"
import { Error500Page } from "./pages/errors/500"
import { ChatSettings } from "./pages/chat-settings"

function registerServices() {
    ServiceLocator.registerService(ChatsService, new ChatsService())
    ServiceLocator.registerService(ProfileService, new ProfileService())
    ServiceLocator.registerService(MutationsObservation, new MutationsObservation())
}

function initRouter() {
   Router
        .use(PAGES.LOGIN, LoginPage)
        .use(PAGES.REGISTER, RegisterPage)
        .use(PAGES.MAIN, MainPage)
        .use(PAGES.PROFILE, ProfilePage)
        .use(PAGES.CHATSETTINGS, ChatSettings)
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
    }
}()), true)
