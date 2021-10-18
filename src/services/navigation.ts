// Тестовый код для сдачи 1 спринта !
import { RegisterPage } from "../pages/register/index"
import { LoginPage } from "../pages/login/index"
import { MainPage } from "../pages/main/index"
import { ProfilePage } from "../pages/profile/index"
import { Error404Page } from "../pages/errors/404/index"
import { Error500Page } from "../pages/errors/500/index"

enum PAGES {
    REGISTER,
    LOGIN,
    MAIN,
    PROFILE,
    ERROR404,
    ERROR500
}

const removeAllChildNodes = (myNode: HTMLElement) => {
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild)
    }
}

const goToAnyPage = (page: number) => {

    const root = document.getElementById("root")
    if(root) removeAllChildNodes(root)

    switch(page) {
        case PAGES.REGISTER:
            new RegisterPage().init()
            break
        case PAGES.LOGIN:
            new LoginPage().init()
            break   
        case PAGES.MAIN:
            new MainPage().init()
            break 
        case PAGES.PROFILE:
            new ProfilePage().init()
            break             
        case PAGES.ERROR404:
            new Error404Page().init()
            break 
        case PAGES.ERROR500:
            new Error500Page().init()
            break 
        default:
            break                                                        
    }
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