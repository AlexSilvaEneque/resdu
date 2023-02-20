import { createCategory } from "~~/server/db/category"

export default defineEventHandler( async ( event ) => {
    const body = await readBody(event)

    const { name } = body

    if (!name) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid params'
        })
    }

    const data = {
        name
    }

    const category = await createCategory(data)

    return { category }
})