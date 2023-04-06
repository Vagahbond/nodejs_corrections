const chaine = "jrbg lesrbg ljsehbrgls'ebrlkgbs,elrg "

const countWords = (c) => {
    return c.match(/([a-zA-Zéàèù]+)/g).length
}

console.log(countWords(chaine))