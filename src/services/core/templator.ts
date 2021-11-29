import { Indexed } from "../../types"
import { Stack } from "../../utils/helpers/stack"
import { trim } from "../../utils/helpers/string.utils"
import { Tree, TreeNode } from "../../utils/helpers/tree"
import { get } from "../../utils/helpers/object.utils"
import { LinkedList } from "../../utils/helpers/linked-list"
import cloneDeep from "../../utils/helpers/clone-deep"

type Attribute = {
    name: string
    value: string
}

type TreeNodeBaseData = {
    tagName: string
    index: number
    // Контекст компиляции ноды
    context?: Indexed
    fragment?: HTMLElement | DocumentFragment | Text
}

type TreeNodeData = TreeNodeBaseData & {
    tagData: string
    attributes: Attribute[]
}

// TODO: Доделать типы
type TreeNodeContainer = TreeNodeBaseData & {
    containerType: string
    ctx: string
    containerData: string
}

enum CONTAINER_TYPES {
    if = "if",
    else = "else",
    each = "each",
    unless = "unless",
    equal = "equal",
}

/* eslint-disable */
export class Templator {
    // Common tag + statement regexp
    TAG_STATE_RE = /<(“[^”]*”|'[^’]*’|[^'”>])*>|\{\{(#|\/)(if|else|each|unless|equal)(.*?)\}\}/gi
    // NOTE: Одинарные кавычки в шаблоне запрещены!
    TAG_RE = /<(“[^”]*”|'[^’]*’|[^'”>])*>/
    OPENING_STATE_RE = /\{\{(#)(if |else|each |unless |equal )(.*?)\}\}/
    CLOSING_STATE_RE = /\{\{(\/)(if|else|each|unless|equal)(.*?)\}\}/
    // Opening, closing + self-closing tags
    OPENING_TAG_RE = /<[^\/](“[^”]*”|'[^’]*’|[^'”>])[^\/]*>/
    CLOSING_TAG_RE = /<\/(“[^”]*”|'[^’]*’|[^'”>])[^\/]*>/
    SELF_CLOSING_TAG_RE = /<[^\/](“[^”]*”|'[^’]*’|[^'”>])*\/>/
    TAG_NAME_RE = /<(\/)?([^\s>]+)(\s|>)+/
    // #if
    IF_OPEN_RE = /\{\{#if (.*?)\}\}/
    IF_CLOSE_RE = /\{\{\/if\}\}/
    // else
    ELSE_RE = /\{\{#else\}\}/
    // #unless
    UNLESS_OPEN_RE = /\{\{#unless (.*?)\}\}/
    UNLESS_CLOSE_RE = /\{\{\/unless\}\}/
    // #equal
    EQ_OPEN_RE = /\{\{#equal (.*?)\}\}/
    EQ_CLOSE_RE = /\{\{\/equal\}\}/
    // #each
    EACH_OPEN_RE = /\{\{#each (.*?)\}\}/
    EACH_CLOSE_RE = /\{\{\/each\}\}/
    // ctx
    TEMPLATE_RE = /\{\{(.*?)\}\}/gi
    // attributes
    ATTRIB_RE = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi

    private _template: string
    private _tree: Tree<TreeNodeData | TreeNodeContainer>
    private _ctx: Indexed
    private _fragment: DocumentFragment

    constructor(template: string) {
        this._template = template
        this._tree = this._createTree()
    }

    compile(ctx: Indexed): DocumentFragment {
        this._ctx = ctx
        this._createDOM()
        return this._fragment
    }

    private _createTree(): Tree<TreeNodeData | TreeNodeContainer> {
        const tmpl = this._template
        const rootNodeData: TreeNodeData = {
            tagData: "",
            tagName: "template",
            index: -1,
            attributes: [],
        }
        let key = null
        const tree = new Tree<TreeNodeData | TreeNodeContainer>(rootNodeData)
        let parentNode = tree.root
        let prevIndex = 0
        const openTagsList = new Stack()
        // Флаги парсера
        let isIfStatementOpened = false
        let isElseStatementOpened = false
        let isUnlessStatementOpened = false
        let isIfEqStatementOpened = false
        let isEachStatementOpened = false
        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = this.TAG_STATE_RE.exec(tmpl))) {
            // NOTE: TAG
            if (this.TAG_RE.test(key[0])) {
                const tagData = key[0]
                const tagDataKey = this.TAG_NAME_RE.exec(tagData)
                if (!tagDataKey) {
                    throw new Error("Ошибка tagDataKey")
                }
                const tagName = tagDataKey[2]
                const { index } = key
                // Парсим атрибуты
                const attributes: Attribute[] = []
                let attributeKey = null
                while (attributeKey = this.ATTRIB_RE.exec(tagData)) {
                    const name = attributeKey[1]
                    const value = attributeKey[2]
                    attributes.push({ name, value })
                }
                // Создаем ноду
                const data: TreeNodeData = {
                    tagName, tagData, attributes, index,
                }
                // Добавляем текст между тэгами как ноду текста
                prevIndex = this._checkTextBetweenTags(tmpl, prevIndex, data, parentNode)
                // TODO: Сократить запись
                if (this.OPENING_TAG_RE.test(tagData)) {
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                    continue
                }
                if (this.CLOSING_TAG_RE.test(tagData)) {
                    parentNode = this._onClosingTag(openTagsList, tagName)
                    continue
                }
                if (this.SELF_CLOSING_TAG_RE.test(tagData)) {
                    // Создаем ноду
                    const node = new TreeNode(data)
                    node.parent = parentNode as TreeNode<TreeNodeData>
                    // Добавляем в дерево в род ноду
                    parentNode.children.push(node)
                    continue
                }
            }
            // NOTE: STATEMENT
            if (this.OPENING_STATE_RE.test(key[0]) || this.CLOSING_STATE_RE.test(key[0])) {
                const tagName = trim(key[3])
                const { index } = key
                const ctx = trim(key[4])
                const data: TreeNodeContainer = {
                    tagName,
                    containerType: tagName,
                    containerData: key[0],
                    ctx,
                    index,
                }
                prevIndex = this._checkTextBetweenTags(tmpl, prevIndex, data, parentNode)

                // TODO: Сократить запись
                if (this.IF_OPEN_RE.test(key[0])) {
                    isIfStatementOpened = true
                    // Создаем ноду особого типа и добавляем в дерево
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                    continue
                }
                if (this.IF_CLOSE_RE.test(key[0])) {
                    isIfStatementOpened = false
                    // Если исп else, то удаляем со стэка
                    if (isElseStatementOpened) {
                        parentNode = this._onClosingTag(openTagsList, "else")
                        isElseStatementOpened = false
                    }
                    parentNode = this._onClosingTag(openTagsList, tagName)
                    continue
                }
                if (this.ELSE_RE.test(key[0])) {
                    isElseStatementOpened = true
                    if (!(parentNode.data.tagName === CONTAINER_TYPES.if)) {
                        throw new Error("Некорректное употребление else")
                    }
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                }
                if (this.UNLESS_OPEN_RE.test(key[0])) {
                    isUnlessStatementOpened = true
                    // Создаем ноду особого типа и добавляем в дерево
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                    continue
                }
                if (this.UNLESS_CLOSE_RE.test(key[0])) {
                    isUnlessStatementOpened = false
                    parentNode = this._onClosingTag(openTagsList, tagName)
                    continue
                }
                if (this.EQ_OPEN_RE.test(key[0])) {
                    isIfEqStatementOpened = true
                    // Создаем ноду особого типа и добавляем в дерево
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                    continue
                }
                if (this.EQ_CLOSE_RE.test(key[0])) {
                    isIfEqStatementOpened = false
                    parentNode = this._onClosingTag(openTagsList, tagName)
                    continue
                }
                if (this.EACH_OPEN_RE.test(key[0])) {
                    isEachStatementOpened = true
                    parentNode = this._onOpeningTag(parentNode, openTagsList, data)
                    continue
                }
                if (this.EACH_CLOSE_RE.test(key[0])) {
                    isEachStatementOpened = false
                    parentNode = this._onClosingTag(openTagsList, tagName)
                    continue
                }
            }
        }

        if (isIfStatementOpened) {
            throw new Error("Не найден закрывающий if")
        }
        if (isUnlessStatementOpened) {
            throw new Error("Не найден закрывающий unless")
        }
        if (isIfEqStatementOpened) {
            throw new Error("Не найден закрывающий if_eq")
        }
        if (isEachStatementOpened) {
            throw new Error("Не найден закрывающий each")
        }

        return tree
    }

    private _createDOM(): void {
        const tree = this._tree
        this._fragment = document.createDocumentFragment()
        tree.traverseBF(this._createDomCallback.bind(this))
    }

    private _createDomCallback(
        node: TreeNode<TreeNodeData | TreeNodeContainer>,
        queue: LinkedList,
    ) {
        // Если root, то ничего не делаем
        if (!node.parent) {
            node.data.fragment = this._fragment
            return
        }
        if (this._isTreeNodeData(node.data)) {
            if (!this._sanitize(node)) {
                return
            }
            node.data = node.data as TreeNodeData
            let element: HTMLElement | Text
            const context = node.data.context || this._ctx
            // Тогда это нода текста
            if (!node.data.tagName) {
                const data = this._compileString(node.data.tagData, context)
                element = document.createTextNode(data)
            } else {
                element = document.createElement(node.data.tagName)
                for (const attr of node.data.attributes) {
                    try {
                        const value = this._compileString(attr.value, context)
                        if (attr.name === "style") {
                            element.style.cssText = value
                        } else {
                            element.setAttribute(attr.name, value)
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
            // Сохраняем в node ссылку на элемент
            node.data.fragment = element
            // Добавляем к родителю
            if (node.parent.data.fragment) {
                node.parent.data.fragment.appendChild(element)
            }
        } else {
            node.data = node.data as TreeNodeContainer
            // Перекидываем ссылку на родителя наверх
            node.data.fragment = node.parent.data.fragment
            // удаляем из очереди добавленных уже туда детей
            for (let i = 0; i < node.children.length; i++) {
                queue.pop()
            }
            //
            if (node.data.containerType === CONTAINER_TYPES.if) {
                const ctx = get(this._ctx, node.data.ctx, false)
                const elseNode = node.children.find(
                    (x) => x.data.tagName === CONTAINER_TYPES.else,
                )
                const children = node.children.filter(
                    (x) => x.data.tagName !== CONTAINER_TYPES.else,
                )
                if (ctx) {
                    for (let i = children.length - 1; i >= 0; i--) {
                        queue.shift(children[i])
                    }
                } else if (elseNode) {
                    queue.shift(elseNode)
                }
            }
            if (node.data.containerType === CONTAINER_TYPES.else) {
                // Если сюда дошли, то рендерим всех детей
                for (let i = node.children.length - 1; i >= 0; i--) {
                    queue.shift(node.children[i])
                }
            }
            //
            if (node.data.containerType === CONTAINER_TYPES.unless) {
                const ctx = get(this._ctx, node.data.ctx, false)
                if (!ctx) {
                    for (const child of node.children) {
                        queue.shift(child)
                    }
                }
            }
            //
            if (node.data.containerType === CONTAINER_TYPES.equal) {
                let [value1, value2] = node.data.ctx.split("'")
                value1 = trim(value1, ["'", " "])
                value2 = trim(value2, ["'"])
                const ctx1 = get(this._ctx, value1, value1)
                const ctx2 = get(this._ctx, value2, value2)
                if (ctx1 === ctx2) {
                    for (const child of node.children) {
                        queue.shift(child)
                    }
                }
            }
            // Если ctx с ошибками, то игнорируем вызов
            if (node.data.containerType === CONTAINER_TYPES.each) {
                const ctx = get(this._ctx, node.data.ctx, [])
                if (!Array.isArray(ctx)) {
                    return
                }
                // добавляем в очередь n раз детей с новым ctx
                for (let i = ctx.length - 1; i >= 0; i--) {
                    for (const child of node.children) {
                        // Синтаксический сахар this
                        const context = { this: ctx[i] }
                        // TODO: Подумать как делать более эффективно
                        const childCopy = this._createCopyRecurs(child, context)
                        // И поставить в очередь
                        queue.shift(childCopy)
                    }
                }
            }
        }
    }

    private _compileString(str: string, ctx: Indexed): string {
        let result = str
        let key = null
        while ((key = this.TEMPLATE_RE.exec(str))) {
            if (key[1]) {
                const tmplValue = key[1].trim()
                const data = get(ctx, tmplValue, "").toString()
                result = result.replace(new RegExp(key[0], "gi"), data)
            }
        }
        return result
    }

    private _onOpeningTag(
        parentNode: TreeNode<TreeNodeData | TreeNodeContainer>,
        openTagsList: Stack,
        data: TreeNodeData | TreeNodeContainer,
    ) {
        // Создаем ноду
        const node = new TreeNode(data)
        node.parent = parentNode
        // Добавляем в список
        parentNode.children.push(node)
        // Добавляем в список. Теперь родитель - новая нода
        parentNode = node
        openTagsList.push(node)
        return parentNode
    }

    private _onClosingTag(
        openTagsList: Stack,
        tagName: string,
    ) {
        const openingTagNode = openTagsList.peek()?.value
        const openingTagName = openingTagNode.data.tagName
        if (tagName !== openingTagName) {
            throw new Error(`Ошибка парсинга. Тэг ${tagName} не соответствует ${openingTagName}`)
        }
        // Удаляем ноду со стека и обновляем parentNode
        return openTagsList.pop()?.value.parent
    }

    private _checkTextBetweenTags(
        tmpl: string,
        prevIndex: number,
        newNodeData: TreeNodeData | TreeNodeContainer,
        parentNode: TreeNode<TreeNodeData | TreeNodeContainer>,
    ): number {
        // Проверяем наличие текста
        const text = trim(tmpl.slice(prevIndex, newNodeData.index), ["\n"])
        if (text) {
            // Если текст есть, то добавляем ноду текста
            const data: TreeNodeData = {
                tagData: text,
                tagName: "",
                index: prevIndex,
                attributes: [],
            }
            // Создаем ноду
            const node = new TreeNode(data)
            node.parent = parentNode as TreeNode<TreeNodeData>
            // Добавляем в дерево в род ноду
            parentNode.children.push(node)
        }
        if (this._isTreeNodeData(newNodeData)) {
            prevIndex = newNodeData.index + newNodeData.tagData.length
        } else {
            prevIndex = newNodeData.index + newNodeData.containerData.length
        }
        return prevIndex
    }

    private _isTreeNodeData(data: TreeNodeData | TreeNodeContainer): data is TreeNodeData {
        return (data as TreeNodeContainer).containerType === undefined
    }

    private _createCopyRecurs(
        node: TreeNode<TreeNodeData | TreeNodeContainer>,
        ctx: Indexed,
    ): TreeNode<TreeNodeData | TreeNodeContainer> {
        // NOTE: cloneDeep не работает с CD
        const { parent, children, ...cNode } = node
        const newNode = cloneDeep(cNode) as TreeNode<TreeNodeData | TreeNodeContainer>
        newNode.parent = parent
        newNode.children = []
        newNode.data.context = ctx
        for (const child of children) {
            const childCopy = this._createCopyRecurs(child, ctx)
            childCopy.parent = newNode
            newNode.children.push(childCopy)
        }
        return newNode
    }

    private _sanitize(node: TreeNode<TreeNodeData | TreeNodeContainer>): boolean {
        if (node.data.tagName === "script") {
            return false
        }
        return true
    }
}
/* eslint-enable */