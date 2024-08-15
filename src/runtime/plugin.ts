import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      formatCurrency: (value: number, locale: string = 'en-US', currency: string = 'USD') => {
        return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value)
      }
    }
  }
})
