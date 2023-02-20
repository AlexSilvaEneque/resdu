import prisma from "."
import bcrypt from "bcrypt"
import { IUser } from '../interface/User'

export const allUsers = () => {
    return prisma.user.findMany()
}

export const getUserById = ( id : string ) => {
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}

export const getUserByEmail = ( email : string ) => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const createUser = ( dataUser : IUser ) => {
    const data = { ...dataUser, password: bcrypt.hashSync(dataUser.password!, 10) }

    return prisma.user.create({
        data
    })
}

export const updateUser = ( id : string, data : IUser ) => {
    if (data.password) {
        const dataU = { ...data, password: bcrypt.hashSync(data.password!, 10) }
        return prisma.user.update({
            where: {
                id
            },
            data: dataU
        })
    }
    
    return prisma.user.update({
        where: {
            id
        },
        data
    })
}