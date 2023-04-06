import { Router } from "express";
import reservationsRepository from "./Repository";

const reservationsController = Router();

reservationsController.get("/", (req, res) => {
    const reservations = reservationsRepository.getAll();

    res.status(200).send(reservations);
})

reservationsController.get("/:id", (req, res) => {
    const reservation = reservationsRepository.getOne(req.params.id);

    if (!reservation) {
        res.status(404).send({
            status: 404,
            message: "Not found"
        })
        return
    }

    res.status(200).send(reservation)
})

reservationsController.post("/", (req, res) => {
    const errors = reservationsRepository.createOne(
        req.body
    )

    if (errors) {
        res.status(400).send({
            status: 400,
            message: "Bad Request",
            details: errors
        })
        return
    }

    res.status(201).send({
        status: 201,
        message: "created",
    })
})

reservationsController.delete("/:id", (req, res) => {
    if (reservationsRepository.deleteOne(req.params.id)) {
        res.status(204).send()
        return;
    } else {
        res.status(404).send({
            status: 404,
            message: "Not found!"
        })
    }


})





export default reservationsController