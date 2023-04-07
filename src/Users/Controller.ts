import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import usersRepository from "./Repository";

const usersController = Router();

usersController.get("/", (req, res) => {
    const users = usersRepository.getAll();

    res.status(200).send(users);
})

usersController.get("/:id", (req, res) => {
    const user = usersRepository.getOne(req.params.id);

    if (!user) {
        res.status(404).send({
            status: 404,
            message: "Not found"
        })
        return
    }

    res.status(200).send(user)
})

usersController.post("/", authMiddleware(["admin", "worker"]),(req, res) => {
    const errors = usersRepository.createOne(
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

usersController.delete("/:id", (req, res) => {
    if (usersRepository.deleteOne(req.params.id)) {
        res.status(204).send()
        return;
    } else {
        res.status(404).send({
            status: 404,
            message: "Not found!"
        })
    }


})





export default usersController