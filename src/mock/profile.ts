import { ProfileField } from "../services/state/profile.service"

export const PROFILE_DATA: Array<ProfileField> = [
    {
        name: "email",
        type: "email",
        title: "Почта",
        value: "pochta@yandex.ru",
    },
    {
        name: "login",
        type: "text",
        title: "Логин",
        value: "ivanovivan",
    },
    {
        name: "first_name",
        type: "text",
        title: "Имя",
        value: "Иван",
    },
    {
        name: "second_name",
        type: "text",
        title: "Фамилия",
        value: "Иванов",
    },
    {
        name: "dispalay_name",
        type: "text",
        title: "Имя в чате",
        value: "Иван",
    },
    {
        name: "phone",
        type: "text",
        title: "Телефон",
        value: "+7444234123",
    },
]