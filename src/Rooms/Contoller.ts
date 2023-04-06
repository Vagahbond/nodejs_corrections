import { Router } from "express";
import roomsRepository from "./Repository";

const roomsController = Router();

roomsController.get("/", (req, res) => {
    const rooms = roomsRepository.getAll();

    res.status(200).send(rooms);
})

roomsController.get("/:id", (req, res) => {
    const room = roomsRepository.getOne(req.params.id);

    if (!room) {
        res.status(404).send({
            status: 404,
            message: "Not found"
        })
        return
    }

    res.status(200).send(room)
})

roomsController.post("/", (req, res) => {
    const errors = roomsRepository.createOne(
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

roomsController.delete("/:id", (req, res) => {
    if (roomsRepository.deleteOne(req.params.id)) {
        res.status(204).send()
        return;
    } else {
        res.status(404).send({
            status: 404,
            message: "Not found!"
        })
    }


})





export default roomsController