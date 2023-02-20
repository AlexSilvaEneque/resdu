import { updateUser } from "~~/server/db/user"
import { IUser } from '../../interface/User'

export default defineEventHandler( async ( event ) => {
    const id = event.context.params!.id
    const body = await readBody(event)

    const { first_name, last_name, email, password } = body

    const data : IUser = {
        first_name,
        last_name,
        email,
        password
    }

    const user = await updateUser(id, data)

    return { user }
})