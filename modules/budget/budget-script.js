function removeTime(date) {
    date = new Date(date)
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    )
}