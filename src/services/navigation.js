// Тестовый код для сдачи 1 спринта !
import { RegisterPage } from "../pages/register/index"
import { LoginPage } from "../pages/login/index"
import { MainPage } from "../pages/main/index"
import { ProfilePage } from "../pages/profile/index"
import { Error404Page } from "../pages/errors/404/index"
import { Error500Page } from "../pages/errors/500/index"

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

export function goToProfilePage() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new ProfilePage().init()
}

export function goToError404Page() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new Error404Page().init()
}

export function goToError500Page() {
    const root = document.getElementById("root")
    removeAllChildNodes(root)
    new Error500Page().init()
}