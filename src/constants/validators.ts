import { Validator, VALIDITY_TYPES } from "../utils/classes/validators"

export const REQUIRED_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.required,
    value: "",
}

export const EMAIL_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.pattern,
    value: "^.+@[A-Za-z]+\\.[A-za-z]+$",
    error: "Введите e-mail корректно",
}

export const LOGIN_PATTERN_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.pattern,
    value: "^[A-Za-zA-Zа-я]{1}[A-Za-zА-Яа-я0-9\_\-]+$",
    error: "Логин должен содержать только символы [A-z][0-9]-_ и начинаться с буквы",
}

export const LOGIN_MIN_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.minLength,
    value: 3,
    error: "Не менее 3 символов",
}

export const LOGIN_MAX_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.maxLength,
    value: 20,
    error: "Не более 20 символов",
}

export const NAME_PATTERN_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.pattern,
    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$",
    error: "Латиница или кириллица. Допустим дефис. Первая буква заглавная",
}

export const PHONE_MIN_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.minLength,
    value: 10,
    error: "Не менее 10 символов",
}

export const PHONE_MAX_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.maxLength,
    value: 15,
    error: "Не более 15 символов",
}

export const PHONE_PATTERN_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.pattern,
    value: "^\\+{0,1}[0-9]+$",
    error: "Только цифры. Может начинаться с +",
}

export const PASSWORD_MIN_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.minLength,
    value: 8,
    error: "Не менее 8 символов",
}

export const PASSWORD_MAX_LENGTH_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.maxLength,
    value: 40,
    error: "Не более 40 символов",
}

export const PASSWORD_PATTERN_VALIDATOR: Validator = {
    type: VALIDITY_TYPES.pattern,
    value: "^(?=.*[\\p{Lu}])(?=.*\\d).*$",
    error: "Обязательно хотя бы одна заглавная буква и цифра",
}