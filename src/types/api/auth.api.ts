export type SignUpUserData = {
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
}

export type SignUpServerResponse = {
    id: number
}

export type SignInUserData = {
    login: string
    password: string
    [key: string]: any
}

export type ServerUserResponse = SignUpUserData & {
    id: number,
    avatar: string
}