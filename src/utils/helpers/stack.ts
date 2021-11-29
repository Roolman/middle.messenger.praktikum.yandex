type StackElement = {
    value: any
    next: StackElement | null
    prev: StackElement | null
}

export class Stack {
    size: number
    head: StackElement | null
    tail: StackElement | null

    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    // Кладёт элемент на стек.
    // Возвращает новый размер стека.
    push(value: any): number {
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

    // Убирает элемент со стека.
    // Если стек пустой, кидает ошибку.
    // Возвращает удалённый элемент.
    pop(): StackElement | null {
        if (!this.head || !this.tail) {
            throw new Error("Пустой стэк")
        }
        const node = this.tail
        this.tail = this.tail.prev
        if (this.tail) {
            this.tail.next = null
        } else {
            this.head = this.tail
        }
        this.size -= 1
        return node
    }

    // Возвращает верхний элемент стека без его удаления.
    peek(): StackElement | null {
        return this.tail
    }

    // Если стек пуст, возвращает true. В противном случае –– false.
    isEmpty(): boolean {
        if (!this.head || !this.tail || this.size === 0) {
            return true
        }

        return false
    }
}