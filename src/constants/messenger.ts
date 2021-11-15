export enum MESSENGER_EVENTS {
    // Вход юзера в чат
    USER_CONNECTED = "user connected",
    // Пинг вебсокета
    PING = "ping",
    PONG = "pong",
    // Получить старые сообщения
    GET_OLD = "get old",
    // Отправить сообщение текстовое
    MESSAGE = "message",
    // Отправить сообщение файловое
    FILE = "file",
    // Отправить стикер
    STICKER = "sticker",
}