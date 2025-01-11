"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeWord = capitalizeWord;
exports.capitalizeWords = capitalizeWords;
function capitalizeWords(wordsArray) {
    if (wordsArray.length === 0)
        return wordsArray;
    return wordsArray.map(word => capitalizeWord(word));
}
function capitalizeWord(word) {
    return word.replace(/(^|-)([a-z])/g, (_, prefix, char) => prefix + char.toUpperCase());
}
