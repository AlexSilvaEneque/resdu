import { createAnswer } from "~~/server/db/answer"
import { IAnswer } from '../../interface/Answer'

export default defineEventHandler( async ( event ) => {

    const body = await readBody(event)

    const { description, user_id, question_id } = body

    if (!description || !user_id || !question_id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const data : IAnswer = {
        description,
        user_id,
        question_id
    }

    const answer = await createAnswer(data)

    return { answer }
})