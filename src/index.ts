import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import * as Handlebars from "handlebars"

import { goToLoginPage, goToProfilePage } from './services/navigation'
import ServiceLocator from './services/serviceLocator'
import { ChatsService } from './services/chats.service'

window.onload = () => {
    registerServices()

    goToProfilePage()
}

function registerServices() {
    ServiceLocator.registerService(ChatsService, new ChatsService())
}

// Глобальный хэлпер
Handlebars.registerHelper('if_eq', function(a: unknown, b: unknown, opts: Handlebars.HelperOptions) {
    if (a === b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})


