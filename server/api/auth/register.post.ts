import { createUser } from '~~/server/db/user';
import { IUser } from '../../interface/User';

export default defineEventHandler( async ( event ) => {
    
    const body : IUser = await readBody(event)

    const { first_name, last_name, email, password } = body

    if (!first_name || !last_name || !email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const userData : IUser = {
        first_name,
        last_name,
        email,
        password
    }

    const user = await createUser( userData )

    return {
        user
    }
    
} )