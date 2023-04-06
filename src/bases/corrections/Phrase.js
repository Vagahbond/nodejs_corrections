const chaine = "jrbg lesrbg ljsehbrgls'ebrlkgbs,elrg "

const invertSentence = (c) => {
    const invertedSeparators = c.match(/([^a-zA-Zéàèù]+)/g).reverse()
    const invertedWords = c.match(/([a-zA-Zéàèù]+)/g).reverse()

    const separatorBeforeWord = c[c.length - 1].match(/([^a-zA-Zéàèù]+)/g) != -1

    const invertedSentence = invertedWords.map((word, index) => {
        return separatorBeforeWord ?
            invertedSeparators[index] + word :
            word + invertedSeparators[index]
    })

    return invertedSentence.join("")

}

console.log("Phrase originale: " + chaine)
console.log("Phrase inversée: " + invertSentence(chaine))