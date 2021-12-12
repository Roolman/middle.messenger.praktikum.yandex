import { Queue, QueueElement } from "./queue"

export class LinkedList extends Queue {
    // Кладёт элемент в начало списка
    // Возвращает новый размер стека.
    shift(value: any): number {
        const node = { value, prev: null, next: this.head }
        if (this.head) {
            this.head.prev = node
        }
        this.head = node
        if (!this.tail) {
            this.tail = this.head
        }
        this.size += 1
        return this.size
    }

    // Убирает элемент с конца списка
    // Если стек пустой, кидает ошибку.
    // Возвращает удалённый элемент.
    pop(): QueueElement | null {
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
}