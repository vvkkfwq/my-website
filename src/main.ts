import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

const app = createApp(App);

// 挂载Router
app.use(Router);

app.mount('#app');
