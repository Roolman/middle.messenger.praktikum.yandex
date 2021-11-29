import { LinkedList } from "./linked-list"

export class TreeNode<T> {
    data: T
    parent: TreeNode<T> | null
    children: Array<TreeNode<T>>

    constructor(data: T) {
        this.data = data
        this.parent = null
        this.children = []
    }

    add(node: TreeNode<T>) {
        this.children.push(node)
    }
}

export class Tree<T> {
    root: TreeNode<T>

    constructor(data: T) {
        const node = new TreeNode(data)
        this.root = node
    }

    traverseBF(callback: Function) {
        const queue = new LinkedList()

        queue.enqueue(this.root)

        let currentTree = queue.dequeue()?.value

        while (currentTree) {
            const { length } = currentTree.children
            for (let i = 0; i < length; i += 1) {
                queue.enqueue(currentTree.children[i])
            }

            callback(currentTree, queue)
            const queueElement = queue.dequeue()
            currentTree = queueElement ? queueElement.value : null
        }
    }

    contains(callback: Function) {
        this.traverseBF(callback)
    }

    add(data: T, toData: T) {
        const child = new TreeNode(data)
        let parent: TreeNode<T> | null = null

        const callback = (node: TreeNode<T>): void => {
            if (node.data === toData) {
                parent = node
            }
        }

        this.contains(callback)

        if (parent) {
            (parent as TreeNode<T>).children.push(child)
            child.parent = parent
        } else {
            throw new Error("Нельзя добавить узел к несуществующему корню")
        }
    }

    remove(data: T, fromData: T) {
        let parent: TreeNode<T> | null = null
        let childToRemove: TreeNode<T> | null = null
        let index

        const callback = function (node: TreeNode<T>) {
            if (node.data === fromData) {
                parent = node
            }
        }

        this.contains(callback)

        if (parent) {
            parent = parent as TreeNode<T>
            index = this._findIndex(parent.children, data)

            if (index === undefined) {
                throw new Error("Узел не существует")
            } else {
                childToRemove = parent.children.splice(index, 1)[0]
            }
        } else {
            throw new Error("Корень узла не существует")
        }

        return childToRemove
    }

    private _findIndex(arr: Array<TreeNode<T>>, data: T) {
        let index

        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i].data === data) {
                index = i
            }
        }

        return index
    }
}
