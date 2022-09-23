// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    baseURL: process.env.BASE_URL,
    publicRuntimeConfig: {
        gaTrackingId: process.env.GA_TRACKING_ID,
        baseURL: process.env.BASE_URL
    }
})
