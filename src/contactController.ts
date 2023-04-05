import express, { Router } from 'express';

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

export default contactRouter;
