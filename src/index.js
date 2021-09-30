import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles.scss'

import { LoginPage } from './pages/login/index'

window.onload = () => {
    const loginPage = new LoginPage()
    loginPage.init()
}