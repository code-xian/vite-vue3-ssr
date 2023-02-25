import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import {createRouter} from './router'

import './assets/main.css'

export function createApp() {
    const app = createSSRApp(App)
    const pinia = createPinia()
    app.use(pinia)
    const router = createRouter()
    app.use(router)
    return { app, router }
}
