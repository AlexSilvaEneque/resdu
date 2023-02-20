import { deleteAnswer } from "~~/server/db/answer"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params?.id

    const answer = await deleteAnswer(id as string)
    
    return { answer }
})