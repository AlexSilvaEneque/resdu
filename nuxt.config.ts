// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    runtimeConfig: {
        jwtAccess: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefresh: process.env.JWT_REFRESH_TOKEN_SECRET
    },

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    app: {
        head: {
            title: 'Resdu',
            
            link: [
                { rel: 'icon', type: 'image/png', href: '/img/icon.png' }
            ]
        }
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})
