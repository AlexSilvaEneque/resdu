import { deleteQuestion } from "~~/server/db/question"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id

    const question = await deleteQuestion(id)

    return { question }
})