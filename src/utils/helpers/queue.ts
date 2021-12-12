export type QueueElement = {
    value: any
    next: QueueElement | null
    prev: QueueElement | null
}

export class Queue {
    size: number
    head: QueueElement | null
    tail: QueueElement | null

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    // Ставит элемент в очередь
    // Возвращает новый размер очереди
    enqueue(value: any): number {
        const node = { value, next: null, prev: this.tail }
        if (this.tail) {
            this.tail.next = node
        }
        this.tail = node
        if (!this.head) {
            this.head = this.tail
        }
        this.size += 1
        return this.size
    }

    // Убирает элемент из очереди.
    // Если очередь пустая, кидает ошибку.
    // Возвращает удалённый элемент.
    dequeue(): QueueElement | null {
        if (!this.head || !this.tail || this.size === 0) {
            return null
        }
        const node = this.head
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = this.head
        }
        this.size -= 1
        return node
    }

    // Возвращает элемент в начале очереди.
    peek(): QueueElement | null {
        return this.head
    }

    // Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty(): boolean {
        if (!this.head || !this.tail || this.size === 0) {
            return true
        }

        return false
    }
}