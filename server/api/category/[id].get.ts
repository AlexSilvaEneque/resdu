import { getCategoryById } from "~~/server/db/category"

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id

    const category = await getCategoryById(id)

    if (!category) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Category not found!'
        })
    }

    return { category }
})