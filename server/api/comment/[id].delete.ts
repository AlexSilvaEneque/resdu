import { deleteComment } from "~~/server/db/comment"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id

    const comment = await deleteComment(id)

    return { comment }
})