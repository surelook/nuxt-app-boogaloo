// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        gaTrackingId: process.env.GA_TRACKING_ID || 'wwwooooo'
    }
})
