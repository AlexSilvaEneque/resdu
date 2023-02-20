import { updateQuestion } from "~~/server/db/question"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid param'
        })
    }

    const body = await readBody(event)

    const { title, description } = body

    const data = {
        title,
        description
    }

    const question = await updateQuestion(id, data)

    return { question }
})