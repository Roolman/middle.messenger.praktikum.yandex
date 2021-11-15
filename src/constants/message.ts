export enum MESSAGE_TYPES {
    TEXT = "message",
    IMAGE = "IMAGE",
}

interface MessageClass {
    [key: string]: string
}

export const MESSAGE_TYPE_CLASS: MessageClass = {
    [MESSAGE_TYPES.TEXT]: "message_text",
    [MESSAGE_TYPES.IMAGE]: "message_image",
}
