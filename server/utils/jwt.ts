import jwt from 'jsonwebtoken'
import { IUser } from '../interface/User'

const generateAccessToken = ( user : IUser ) => {
    const config = useRuntimeConfig()

    return jwt.sign(
        { userId: user.id },
        config.jwtAccess,
        { expiresIn: '10m' }
    )
}

const generateRefreshToken = ( user : IUser ) => {
    const config = useRuntimeConfig()

    return jwt.sign(
        { userId: user.id },
        config.jwtRefresh,
        { expiresIn: '2h' }
    )
}

export const decodeAccessToken = ( token : string ) => {
    const config = useRuntimeConfig()

    try {
        return jwt.verify(token, config.jwtAccess)
    } catch (error) {
        return null
    }
}

export const decodeResfreshToken = ( token : string ) => {
    const config = useRuntimeConfig()

    try {
        return jwt.verify(token, config.jwtRefresh)
    } catch (error) {
        return null
    }
}

export const generateTokens = ( user : IUser ) => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return { accessToken, refreshToken }
}

export const sendRefreshToken = ( event : any, token : string ) => {
    setCookie(event, 'refresh_token', token, {
        httpOnly: true,
        sameSite: true
    })
}