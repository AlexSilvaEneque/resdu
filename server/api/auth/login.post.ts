import { getUserByEmail } from '../../db/user'
import bcrypt from 'bcrypt'
import { sendRefreshToken } from '~~/server/utils/jwt'
import { generateTokens } from '../../utils/jwt';
import { IUser } from '../../interface/User';

export default defineEventHandler( async ( event ) => {
    const body = await readBody(event)

    const { email, password } = body

    if (!email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const user = await getUserByEmail(email)

    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found'
        })
    }

    const matched = await bcrypt.compare(password, user.password)

    if (!matched) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Password wrong'
        })
    }

    const { accessToken, refreshToken } = generateTokens( user as IUser )

    // Add cookie
    sendRefreshToken(event, accessToken)

    return {
        access: accessToken,
        user
    }
})