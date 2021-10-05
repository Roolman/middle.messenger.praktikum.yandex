import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles.scss'
import Handlebars from 'handlebars'

import { LoginPage } from './pages/login/index'
import { ProfilePage } from './pages/profile/index'
import { MainPage } from './pages/main/index'

window.onload = () => {
    const loginPage = new LoginPage()
    loginPage.init()
    // const profilePage = new ProfilePage()
    // profilePage.init()
    // const mainPage = new MainPage()
    // mainPage.init()
}

// Глобальный хэлпер
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a === b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
});