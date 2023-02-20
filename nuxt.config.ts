// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    runtimeConfig: {
        jwtAccess: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefresh: process.env.JWT_REFRESH_TOKEN_SECRET
    }
})
