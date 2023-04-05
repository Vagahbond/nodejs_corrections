"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const wordMatchRegex = /([a-zA-Zéàèùûôâ]+)/g;
const wordFindRegex = /[a-zA-Zéàèùûôâ]/;
let nbwords = 0;
let lastStreamEnd = " ";
const countWords = (c) => {
    var _a;
    return ((_a = c.match(wordMatchRegex)) !== null && _a !== void 0 ? _a : []).length;
};
const findFirstWordIndex = (c) => {
    return (c.search(wordFindRegex));
};
const readStream = fs_1.default.createReadStream("file.txt");
readStream.on("data", (chunk) => {
    nbwords += countWords(chunk.toString());
    if (findFirstWordIndex(chunk.toString()) === 0 && lastStreamEnd.match(wordFindRegex)) {
        nbwords -= 1;
    }
    lastStreamEnd = chunk.toString().slice(-1);
});
readStream.on("end", () => {
    console.log("Nb words :", nbwords);
});
readStream.on("error", (err) => {
    console.log("Error: ", err);
});
readStream.on("finish", () => {
    console.log("Finish");
});
