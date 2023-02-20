import prisma from "."

export const getCommentsByAnswer = ( idAnswer : string ) => {
    return prisma.comment.findMany({
        where: {
            answer_id: idAnswer
        },
        include: {
            user: {
                select: {
                    first_name: true,
                    last_name: true
                }
            }
        }
    })
}

// export const getCommentsByQuestion = ( idQuestion : string ) => {
//     return prisma.comment.findMany({
//         where: {
//             question_id: idQuestion
//         }
//     })
// }

export const createComment = ( data : any ) => {
    return prisma.comment.create({
        data
    })
}

export const deleteComment = ( id : string ) => {
    return prisma.comment.delete({
        where: {
            id
        }
    })
}