export function getCurrentMonth() {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth() + 1}`
}