import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import Handlebars from 'handlebars'

import { LoginPage } from './pages/login/index'

window.onload = () => {
    const loginPage = new LoginPage()
    loginPage.init()
}

// Глобальный хэлпер
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a === b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})