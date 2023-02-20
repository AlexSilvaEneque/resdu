import { getCommentsByAnswer } from "~~/server/db/comment"

export default defineEventHandler( async ( event ) => {
    const query = getQuery(event)

    const comment = await getCommentsByAnswer(query.ans as string)

    return { comment }
})