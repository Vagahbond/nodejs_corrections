import { create, JWT } from 'jwt-express'
import configService from './configService'
import AuthDTO from './dto/auth.dto'

export const generateToken = (
    payload: AuthDTO,
    jwtMethod: (payload: any) => JWT
) => {
    return jwtMethod(payload)
}