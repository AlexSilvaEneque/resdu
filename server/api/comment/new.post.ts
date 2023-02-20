import { createComment } from "~~/server/db/comment"
import { IComment } from "~~/server/interface/Comment"

export default defineEventHandler( async ( event ) => {
    const body = await readBody(event)

    const { description, user_id, answer_id } = body

    if (!description || !user_id || !answer_id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const data : IComment = {
        description,
        user_id,
        answer_id
    }

    const comment = await createComment(data)

    return { comment }
    
})