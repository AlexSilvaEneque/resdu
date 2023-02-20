import prisma from "."
import { IQuestion } from '../interface/Question';

export const allQuestions = () => {
    return prisma.question.findMany()
}

export const getQuestionById = ( id : string ) => {
    return prisma.question.findUnique({
        where: {
            id
        },
        include: {
            user: {
                select: {
                    first_name: true,
                    email: true
                }
            }
        }
    })
}

export const getQuestionsByUser = ( idUser : string ) => {
    return prisma.question.findMany({
        where: {
            user_id: idUser
        },
        include: {
            user: {
                select: {
                    first_name: true,
                    email: true
                }
            }
        }
    })
}

export const createQuestion = ( data : IQuestion ) => {
    return prisma.question.create({
        data
    })
}

export const updateQuestion = ( id : string, data: any ) => {
    return prisma.question.update({
        where: {
            id
        },
        data
    })
}

export const deleteQuestion = ( id : string ) => {
    return prisma.question.delete({
        where: {
            id
        }
    })
}