import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import store from './store';

const app = createApp(App);

// 挂载Router
app.use(Router);

// 挂载pinia
app.use(store);

app.mount('#app');
