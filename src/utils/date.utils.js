export const getShortChatDate = (date) => {
    // Сравниваем с сегодня
    const now = new Date()
    const diff = Math.abs(date - now)
    const day = 60*60*24
    const week = day*7
    // Если сегодня, то время
    const dateObj = new Date(date)
    if(diff < day) return getDateHoursAndMinutes(date)
    // Если до недели, то день недели
    if(diff < week) return `${dateObj.toLocaleString("ru-Ru", { weekday: "long" })}`
    // Иначе дату в формате: "1 января 2021"
    return `${dateObj.toLocaleString("ru-Ru", {day: 'numeric', month: 'numeric', year: 'numeric' })}`
}

export const getDateHoursAndMinutes = (date) => {
    const dateObj = new Date(date)
    const hours = dateObj.getHours()
    const hoursString = hours < 10 ? `0${hours}` : hours
    const minutes = dateObj.getMinutes()
    const minutesString = minutes < 10 ? `0${minutes}` : minutes
    return `${hoursString}:${minutesString}`
}