import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/lib/common';

const app = createApp(App)

app.use(router);
app.use(Antd);
app.use(hljsVuePlugin);

app.mount('#app')
