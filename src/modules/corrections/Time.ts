import http from "http";

interface IDateResponse {
    day: number;
    month: number;
    year: number;
}

interface ITimeResponse {
    hour: number;
    minute: number;
    second: number;
}

const nowToTime = (now: Date): ITimeResponse => ({
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
});

const nowToDate = (now: Date): IDateResponse => ({
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
});

const getResourceFromURL = (url: string = "/"): string => url.split("/")[1];


const server = http.createServer((req, res) => {
    const now = new Date();

    const resource = getResourceFromURL(req.url);

    switch (resource) {
        case "time":
            res.writeHead(200, { "Content-Type": "application.json" });
            res.end(JSON.stringify(nowToTime(now)));
            break;
        case "date":
            res.writeHead(200, { "Content-Type": "application.json" });
            res.end(JSON.stringify(nowToDate(now)));
            break;
        default:
            res.statusCode = 404;
            res.end("Not found");
    }
});

server.listen(3000);