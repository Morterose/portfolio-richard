import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируем маршрутизатор

const app = createApp(App);
app.use(router); // Используем маршрутизатор
app.mount('#app');