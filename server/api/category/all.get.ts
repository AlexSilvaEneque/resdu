import { allCategories } from "~~/server/db/category"

export default defineEventHandler( async ( event ) => {
    const categories = await allCategories()

    return { categories }
})