import { createApp } from 'vue'
import './style/main.css'
import { createPinia } from 'pinia'
import './style/tailwind.css'

import App from './App.vue'
import router from './router'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import { setupQuasar } from './plugins/quasar'
const app = createApp(App)

setupQuasar(app)

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
