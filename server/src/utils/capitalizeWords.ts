function capitalizeWords(wordsArray: string[]): string[]{
    if (wordsArray.length === 0) return wordsArray
    return wordsArray.map(word => capitalizeWord(word));
}

function capitalizeWord(word: string): string {
    return word.replace(/(^|-)([a-z])/g, (_, prefix, char) => prefix + char.toUpperCase())
}

export { capitalizeWord, capitalizeWords}