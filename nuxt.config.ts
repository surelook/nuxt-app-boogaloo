// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL: process.env.BASE_URL
    },
    publicRuntimeConfig: {
        gaTrackingId: process.env.GA_TRACKING_ID
    }
})
