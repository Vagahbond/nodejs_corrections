import { NextFunction, Request, Response } from "express";


export default (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.session.user) {
        next()
    } else {

        res.send({
            message: "You are not allowed to access this resource",
            status: 403
        })
    }
}