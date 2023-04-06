import bodyParser from 'body-parser';
import express from 'express';
import reservationsController from './Reservations/Controller';

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use("/reservations", reservationsController)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
