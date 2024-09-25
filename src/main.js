import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './routes/index.js';

import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Drawer from "primevue/drawer";

const app = createApp(App);

app.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
)
    .component('pv-button', Button)
    .component('pv-drawer', Drawer)
    .component('pv-toolbar', Toolbar)
    .use(router)
    .mount('#app')
