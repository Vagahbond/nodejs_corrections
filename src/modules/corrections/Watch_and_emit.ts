import events from 'events';
import fs from 'fs';

const fileModifiedEmmiter = new events.EventEmitter();
const file = '/tmp/nodejs/file.txt';
const EVENT_NAME = 'fileModified';

fileModifiedEmmiter.on(EVENT_NAME, (fileSizeDifference) => {
    // write a log on logs.txt
    fs.appendFile('logs.txt', `Entry at ${new Date().toISOString()} - File size changed by ${fileSizeDifference} bytes\n`,
        (err) => {
            if (err) {
                throw new Error('Error writing to file');
            }
        })
})


fs.watchFile(file, (cur, prev) => {
    const fileSizeDifference = cur.size - prev.size;
    fileModifiedEmmiter.emit(EVENT_NAME, fileSizeDifference);
})