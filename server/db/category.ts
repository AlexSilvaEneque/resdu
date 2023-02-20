import prisma from "."
import { ICategory } from '../interface/Category';

export const allCategories = () => {
    return prisma.category.findMany()
}

export const getCategoryById = ( id : string ) => {
    return prisma.category.findUnique({
        where: {
            id
        }
    })
}

export const createCategory = ( data : ICategory ) => {
    return prisma.category.create({
        data
    })
}