// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    watchers: {
        rewatchOnRawEvents: ['change'],
        webpack: {
          aggregateTimeout: 300,
        }
      },  
})
