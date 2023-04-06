import fs from "fs";
import util from 'util'

const filename = "file.txt";

const promReadFile = util.promisify(fs.readFile)
const promWriteFile = util.promisify(fs.writeFile)

const watchFile = async (filename: string) => {
    const initialContent = await promReadFile(filename, "utf8")

    fs.watchFile(filename, (curr, prev) => {
        console.log(`rewriting file at ${curr.mtime}`);
        promWriteFile(filename, initialContent, "utf8")
        console.log("Rewrote file back to normal.")
    })
}

watchFile(filename)