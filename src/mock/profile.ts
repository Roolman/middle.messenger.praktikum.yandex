import { ProfileField } from "../services/profile.service"

export let PROFILE_DATA: Array<ProfileField> = [
    {
        name: "email",
        type: "email",
        title: "Почта",
        value: "pochta@yandex.ru",
        errorMessage: "Неверно указана почта"
    },
    {
        name: "login",
        type: "text",
        title: "Логин",
        value: "ivanovivan",
        errorMessage: "Укажите логин"
    },
    {
        name: "first_name",
        type: "text",
        title: "Имя",
        value: "Иван",
        errorMessage: "Укажите имя"
    },
    {
        name: "second_name",
        type: "text",
        title: "Фамилия",
        value: "Иванов",
        errorMessage: "Укажите фамилию"
    },
    {
        name: "dispalay_name",
        type: "text",
        title: "Имя в чате",
        value: "Иван",
        errorMessage: "Укажите имя в чате"
    },
    {
        name: "phone",
        type: "text",
        title: "Телефон",
        value: "+7 (909) 967 30 30",
        errorMessage: "Укажите телефон"
    }
]