import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Global components import
const vueApp = createApp(App)

const components = import.meta.globEager('./components/*.vue');

Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, '');

    vueApp.component(componentName, definition.default)
})

vueApp.use(router).mount('#app')
