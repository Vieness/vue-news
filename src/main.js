
import { createApp } from 'vue'
import App from './App.vue'
import components from '@/conponents/UI'
const app = createApp(App)
components.forEach(component=>{
    app.component(component.name, component)
})
app.mount('#app')
