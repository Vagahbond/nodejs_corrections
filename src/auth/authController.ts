import { Router } from "express";
import { generateToken } from "../services/AuthService";
import usersRepository from "../Users/Repository";


const authController = Router();

authController.post("/login", async (req, res) => {
    const user = await usersRepository.getOneByUsername(req.body.username)
    if (!user) {
        res.status(404).send({
            status: 404,
            message: "User not found"
        })
        return
    }

    if (user.password !== req.body.password) {
        res.status(400).send({
            status: 400,
            message: "Wrong username or password"
        })
        return
    }

    const token = generateToken({
        username: user.username,
        role: user.role
    }, res.jwt)

    res.status(200).send(token)

})

export default authController;

