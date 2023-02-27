import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from "axios";
import VueAxios from 'vue-axios'
import store from './store'
import VueSession from 'vue-session'
import { createAuth0 } from '@auth0/auth0-vue';

loadFonts()

createApp(App).use(store).use(router)
    .use(vuetify)
    .use(VueAxios, axios, VueSession)
    .use(
    createAuth0({
        domain: "dev-m3qfrwppz0adiawl.us.auth0.com",
        clientId: "IDWsApPE93va3TGNTFHczLkSvm9Jmcdg",
        authorizationParams: {
            redirect_uri: window.location.origin,
            audience: "localhost:8080/api",
        }
    })
)
    .mount('#app')
