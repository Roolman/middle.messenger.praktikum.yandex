import { Indexed } from "../../types"

export function get<T>(obj: Indexed, path: string, defaultValue: T): T | keyof Indexed {
    const keys = path.split(".")

    let result: Indexed | keyof Indexed = obj

    for (const key of keys) {
        result = (result as Indexed)[key] as keyof Indexed

        if (result === undefined) {
            return defaultValue
        }
    }

    return (result as keyof Indexed) ?? defaultValue
}