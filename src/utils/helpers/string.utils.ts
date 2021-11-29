export function queryStringify(data: Object): string {
    const entriesArray = Object.entries(data)
    if (!entriesArray.length) {
        return ""
    }
    let output = "?"
    for (const [index, [key, value]] of entriesArray.entries()) {
        output += `${key}=${value.toString()}`
        if (index !== entriesArray.length - 1) output += "&"
    }
    return output
}

export function trim(str: string, symbols?: Array<string | Symbol>) {
    let result = str.trim()
    if (symbols) {
        const regExpString = `[${Array.from(symbols).reduce((sum, x) => `${sum}\\${x}`)}]+`
        const regExp = new RegExp(regExpString, "g")
        result = result.replace(regExp, "")
    }
    return result
}
