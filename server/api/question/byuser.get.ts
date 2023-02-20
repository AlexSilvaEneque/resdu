import { getQuestionsByUser } from "~~/server/db/question"

export default defineEventHandler( async ( event ) => {
    const query = getQuery(event)
    
    const questions = await getQuestionsByUser(query.user as string)

    return { questions }
})