import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueCookies, { expire: '7d'})
app.mount('#app');
