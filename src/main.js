import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import axios from 'axios';
import store from './store';
import VueAxios from 'vue-axios';

createApp(App).use(store).use(router).use(Toaster).use(VueAxios, axios).mount("#app");
