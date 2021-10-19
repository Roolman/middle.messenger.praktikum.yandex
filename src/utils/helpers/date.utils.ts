export const getShortChatDate = (date: Date) => {
    // Сравниваем с сегодня
    const now = new Date()
    const diff = Math.abs(date.getTime() - now.getTime())
    const day = 60*60*24
    const week = day*7
    // Если сегодня, то время
    if(diff < day) return getDateHoursAndMinutes(date)
    // Если до недели, то день недели
    if(diff < week) return `${date.toLocaleString("ru-Ru", { weekday: "long" })}`
    // Иначе дату в формате: "1 января 2021"
    return `${date.toLocaleString("ru-Ru", {day: 'numeric', month: 'numeric', year: 'numeric' })}`
}

export const getDateHoursAndMinutes = (date: Date) => {
    const hours = date.getHours()
    const hoursString = hours < 10 ? `0${hours}` : hours
    const minutes = date.getMinutes()
    const minutesString = minutes < 10 ? `0${minutes}` : minutes
    return `${hoursString}:${minutesString}`
}