export const replaceWithBr = (text:string) => {
    return text.replace(/\n/g, "<br />");
}

export const countReadingTime = (text:string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute)
}