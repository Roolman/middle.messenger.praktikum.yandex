import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import * as Handlebars from "handlebars"

import { goToLoginPage, goToProfilePage } from './services/navigation'

window.onload = () => {
    goToProfilePage()
}

// Глобальный хэлпер
Handlebars.registerHelper('if_eq', function(a: unknown, b: unknown, opts: Handlebars.HelperOptions) {
    if (a === b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})