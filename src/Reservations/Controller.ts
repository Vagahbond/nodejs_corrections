import { Router } from "express";
import reservationsRepository from "./Repository";

const reservationsController = Router();

reservationsController.get("/", (req, res) => {
    const reservations = reservationsRepository.getAll();
    
    res.header(200).send(reservations);
})

reservationsController.post("/", (req, res) => {

    console.log(req.body)

    const errors = reservationsRepository.createOne(
        JSON.parse(req.body)
    )

    if (errors) {
        res.header(400).send({
            status: 400,
            message: "Bad Request", 
            details: errors
        })
    }

    res.header(201).send({
        status: 201,
        message: "created",
    })

})

export default reservationsController