import fs, { read } from "fs";

const wordMatchRegex = /([a-zA-Zéàèùûôâ]+)/g;
const wordFindRegex = /[a-zA-Zéàèùûôâ]/;

let nbwords = 0;
let lastStreamEnd = " ";

const countWords = (c: string): number => {
    return (c.match(wordMatchRegex) ?? []).length
}

const findFirstWordIndex = (c: string): number => {
    return (c.search(wordFindRegex))
}

const readStream = fs.createReadStream("file.txt");

readStream.on("data", (chunk) => {
    nbwords += countWords(chunk.toString());
    if (findFirstWordIndex(chunk.toString()) === 0 && lastStreamEnd.match(wordFindRegex)) {
        nbwords -= 1;
    }

    lastStreamEnd = chunk.toString().slice(-1);
})

readStream.on("end", () => {
    console.log("Nb words :", nbwords);
})

readStream.on("error", (err) => {
    console.log("Error: ", err);
})

readStream.on("finish", () => {
    console.log("Finish");
})