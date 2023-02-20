import { getQuestionById } from "~~/server/db/question"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id

    if (!id) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not found'
        })
    }

    const question = await getQuestionById(id)

    return { question }
})