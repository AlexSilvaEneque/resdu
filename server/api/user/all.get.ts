import { allUsers } from "~~/server/db/user"

export default defineEventHandler( async ( event ) => {
    const users = await allUsers()

    return { users }
})