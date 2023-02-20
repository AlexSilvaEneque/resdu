import { createQuestion } from "~~/server/db/question"
import { IQuestion } from '../../interface/Question';

export default defineEventHandler( async ( event ) => {
    const body = await readBody(event)

    const { title, description, user_id } = body

    if (!title || !description || !user_id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const data : IQuestion = {
        title,
        description,
        user_id
    }

    const question = await createQuestion(data)

    return { question }
})