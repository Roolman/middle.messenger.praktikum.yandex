// Тестовый код для сдачи 1 спринта !
import { RegisterPage } from "../../pages/register/index"
import { LoginPage } from "../../pages/login/index"
import { MainPage } from "../../pages/main/index"
import { ProfilePage } from "../../pages/profile/index"
import { Error404Page } from "../../pages/errors/404/index"
import { Error500Page } from "../../pages/errors/500/index"

enum PAGES {
    REGISTER,
    LOGIN,
    MAIN,
    PROFILE,
    ERROR404,
    ERROR500,
}

const removeAllChildNodes = (myNode: HTMLElement) => {
    myNode.innerHTML = ""
}

const goToAnyPage = (page: number) => {
    const root = document.getElementById("root")
    if (!root) {
        throw new Error("Ошибка перехода! Root не найден")
    }
    if (root) removeAllChildNodes(root)

    let pageElement: HTMLElement

    switch (page) {
        case PAGES.REGISTER:
            pageElement = new RegisterPage().element
            break
        case PAGES.LOGIN:
            pageElement = new LoginPage().element
            break
        case PAGES.MAIN:
            pageElement = new MainPage().element
            break
        case PAGES.PROFILE:
            pageElement = new ProfilePage().element
            break
        case PAGES.ERROR404:
            pageElement = new Error404Page().element
            break
        case PAGES.ERROR500:
            pageElement = new Error500Page().element
            break
        default:
            pageElement = new RegisterPage().element
            break
    }

    root.appendChild(pageElement)
}

export function goToRegisterPage(): void {
    goToAnyPage(PAGES.REGISTER)
}

export function goToLoginPage(): void {
    goToAnyPage(PAGES.LOGIN)
}

export function goToMainPage(): void {
    goToAnyPage(PAGES.MAIN)
}

export function goToProfilePage(): void {
    goToAnyPage(PAGES.PROFILE)
}

export function goToError404Page(): void {
    goToAnyPage(PAGES.ERROR404)
}

export function goToError500Page(): void {
    goToAnyPage(PAGES.ERROR500)
}