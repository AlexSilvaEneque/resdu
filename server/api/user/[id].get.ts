import { getUserById } from "~~/server/db/user"
import userDTO from '~~/server/dto/User'
import { IUser } from '../../interface/User';

export default defineEventHandler( async ( event ) => {
    
    // route --> /api/user/byId?id=psapsomapomspaoms ... file byId.get.ts
    // const query = getQuery(event)
    // const user = await getUserById(query.id as string)

    // FIXME: validar que id sea tipo objectID

    // TODO: [id].get.ts --> route /api/user/nosianomosmaosimaois
    
    const user = await getUserById(event.context.params!.id)

    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'User not found!'
        })
    }

    return {
        user: userDTO(user as IUser)
    }
    
})