import express from 'express';
import contactRouter from './contactController';
import logMiddleware from './logMiddleware';

const app = express();

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send('Hello World!');
});

app.use("/contacts",logMiddleware, contactRouter)


app.listen(3000, () => {
    console.log('Server started on port 3000');
})