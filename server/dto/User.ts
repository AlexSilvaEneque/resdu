import { IUser } from '../interface/User';

export default ( user : IUser ) => {
    return {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    }
}