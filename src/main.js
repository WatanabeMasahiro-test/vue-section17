import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
// import router from './router/index'
// import store from './store/index'

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vue-section17-11717/databases/(default)/documents';
/**
 * ⏬全てのリクエストに同じ設定をつける方法
 * axios.defaults.headers.common['Authorization'] = 'HereIsToken';
 * axios.defaults.headers.get['accept'] = 'application/json';
 * axios.defaults.headers.post['accept'] = 'application/json';
 *  */
const interceptorsRequest = axios.interceptors.request.use(
    config  => {
        // console.log('interceptors request', config);
        return config;
    },
    error   => {
        return Promise.reject(error);
    },
);
const interceptorsResponse = axios.interceptors.response.use(
    response  => {
        // console.log('interceptors response', response);
        return response;
    },
    error   => {
        return Promise.reject(error);
    },
);

// console.log(interceptorsRequest);
// console.log(interceptorsResponse);
axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

createApp(App)
    // .use(router)
    // .use(store)
.mount('#app')
