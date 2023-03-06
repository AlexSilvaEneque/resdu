import { getUserById } from '../db/user'
import { decodeAccessToken } from '../utils/jwt'

export default defineEventHandler( async ( event ) => {

    interface IEndpoint {
        url: string
        method: string
    }

    interface IResponse {
        userId: string
        iat?: number
        exp?: number
    }

    // endpoint a proteger
    const endpoints : IEndpoint[] = [
        {
            url: '/api/user/',
            method: 'PUT'
        },
        {
            url: '/api/category/new',
            method: 'POST'
        },
        {
            url: '/api/question/new',
            method: 'POST'
        },
        {
            url: '/api/question/',
            method: 'PUT'
        },
        {
            url: '/api/question/',
            method: 'DELETE'
        },
        {
            url: '/api/answer/new',
            method: 'POST'
        },
        {
            url: '/api/answer/',
            method: 'DELETE'
        },
        {
            url: '/api/comment/new',
            method: 'POST'
        },
        {
            url: '/api/comment/',
            method: 'DELETE'
        },
    ]

    const isProtected = endpoints.some((endpoint) => {
        const xUrl = event.node.req.url?.substring(0, event.node.req.url.lastIndexOf('/')+1)
        return endpoint.url === xUrl && endpoint.method === event.node.req.method ? true : false
    })

    if (!isProtected) {
        return
    }
    
    const initCookie = event.node.req.headers.cookie?.indexOf('=')
    const accessToken = event.node.req.headers.cookie?.substring(initCookie! + 1, event.node.req.headers.cookie.length)

    const decoded = decodeAccessToken(accessToken!)

    if (!decoded) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized!'
        })
    }

    try {
        const { userId } = decoded as IResponse
        const user = await getUserById(userId)
        event.context.auth = { user }
    } catch (error) {
        return
    }
    
})