import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles.scss'

import { LoginPage } from './pages/login/index'
import { ProfilePage } from './pages/profile/index'

window.onload = () => {
    // const loginPage = new LoginPage()
    // loginPage.init()
    const profilePage = new ProfilePage()
    profilePage.init()
}