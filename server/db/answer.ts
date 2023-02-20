import prisma from "."
import { IAnswer } from "../interface/Answer"

export const getAnswersByQuestion = ( idQuestion : string ) => {
    return prisma.answer.findMany({
        where: {
            question_id: idQuestion
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

export const createAnswer = ( data : IAnswer ) => {
    return prisma.answer.create({
        data
    })
}

export const deleteAnswer = ( idAnswer : string ) => {
    return prisma.answer.delete({
        where: {
            id: idAnswer
        }
    })
}