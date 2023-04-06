import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import contactRouter from './contactController';
import logMiddleware from './logMiddleware';

declare module 'express-session' {
    export interface SessionData {
      user: { 
        username: string,
       };
    }
  }

const app = express();

app.use(bodyParser.json())
app.use(cookieParser("secret"))
app.use(session({
    secret: "secret"
}))


app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send('Hello World!');
});

app.use("/contacts",logMiddleware, contactRouter)


app.listen(3000, () => {
    console.log('Server started on port 3000');
})