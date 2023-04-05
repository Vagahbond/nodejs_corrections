import express from 'express';
import contactRouter from './contactController';

const app = express();

app.get('/contacts', (req, res) => {
    res.contentType('application/json');
    res.send('Hello World!');
});

app.use("/contacts", contactRouter)


app.listen(3000, () => {
    console.log('Server started on port 3000');
})