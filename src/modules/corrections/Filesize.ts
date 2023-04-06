import fs, { read } from "fs";

let totalSize = 0;

const readStream = fs.createReadStream("test.zip");

readStream.on("data", (chunk) => {
    totalSize += chunk.length;
})

readStream.on("end", () => {
    console.log("Total size: ", totalSize, "bytes.");
})

readStream.on("error", (err) => {
    console.log("Error: ", err);
})

readStream.on("finish", () => {
    console.log("Finish");
})