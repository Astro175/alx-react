const getFullYear = () => {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    return currentYear
}

const getFooterCopy = (isIndex) => {
    if (isIndex) return "Holberton School"
    else return "Holberton School main dashboard"
}

const getLatestNotification = () => {
    return `<strong>Urgent requirement</strong> - complete by EOD`
}

module.exports = { getFooterCopy, getFullYear, getLatestNotification};