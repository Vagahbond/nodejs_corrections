import fs from "fs";
import os from "os";

const stream = fs.createWriteStream("file.txt");

let runningFlag = true;

stream.write("starting logs\n")

const interval = setInterval(() => {

    if (!runningFlag) {
        clearInterval(interval);
        stream.end("ending stream\n")
        return;
    }

    stream.write(`${Date.now()} - on host : ${os.hostname()} - total memory : ${os.totalmem} - free memory : ${os.freemem}\n`)

}, 1000);

stream.on("finish", () => {
    console.log("finished writing to file")
})

setTimeout(() => {
    runningFlag = false;
    stream.end("ending stream\n")

}, 20000)