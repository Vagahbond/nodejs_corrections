import express, { Router } from 'express';
import protectContentMiddleware from './protectContentMiddleware';

const contactRouter = Router();


contactRouter.get('/', (req, res) => {
    res.contentType('application/json');
    res.send([{
        phone: "06 43 45 23 75",
        email: "example@hotmail.fr",
        name: "Robichu",
        firstName: "Alfonce"
    }]);
})

contactRouter.get('/:id([0-9]+)', (req, res) => {
    const id = req.params.id
    res.contentType('application/json');
    res.send([{
        id: id,
        phone: "06 43 45 23 75",
        email: "example@hotmail.fr",
        name: "Robichu",
        firstName: "Alfonce"
    }]);
})

contactRouter.post('/', protectContentMiddleware,(req, res) => {
    res.send({
        status: 201,
        message: "created",
    })
})

export default contactRouter;

