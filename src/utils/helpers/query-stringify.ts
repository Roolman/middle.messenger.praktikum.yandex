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