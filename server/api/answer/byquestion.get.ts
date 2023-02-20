import { getAnswersByQuestion } from "~~/server/db/answer"

export default defineEventHandler( async ( event ) => {
    const query = getQuery(event)

    const answers = await getAnswersByQuestion(query.qt as string)

    return { answers }
})