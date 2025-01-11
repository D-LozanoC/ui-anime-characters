function capitalizeWords(wordsArray) {
    if (wordsArray.length === 0)
        return wordsArray;
    return wordsArray.map(word => capitalizeWord(word));
}
function capitalizeWord(word) {
    return word.replace(/(^|-)([a-z])/g, (_, prefix, char) => prefix + char.toUpperCase());
}
export { capitalizeWord, capitalizeWords };
