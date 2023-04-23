import {createApp} from 'vue'
import {createPinia} from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import {i18n} from "@/i18n/translation.load";

import '@/assets/main.css'
import "primevue/resources/primevue.css";
import "../src/assets/theme.css";
import 'primeicons/primeicons.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue)


app.mount('#app')
