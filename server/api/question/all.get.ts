import { allQuestions } from "~~/server/db/question"

export default defineEventHandler( async ( event ) => {
    const questions = await allQuestions()

    return { questions }
})