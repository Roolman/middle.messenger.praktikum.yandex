// Тестовый код для сдачи 1 спринта !
import { RegisterPage } from "../pages/register/register"
import { LoginPage } from "../pages/login/login"
import { MainPage } from "../pages/main/main"

const removeAllChildNodes = (myNode) => {
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild)
    }
}

export function goToRegisterPage() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new RegisterPage().init()
}

export function goToLoginPage() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new LoginPage().init()
}

export function goToMainPage() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new MainPage().init()
}