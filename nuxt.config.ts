// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        gaTackingId: process.env.GA_TRACKING_ID
    }
})
