export default function getDate() {
    const year = new Date().getFullYear()
    const date = `date: ${new Date()} and year:${year}`
    return date
}



