import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import CopyWrapper from '@framework/CopyWrapper.vue';
import HighLight from '@framework/HighLight.vue';

import { VueClipboard } from '@soerenmartius/vue3-clipboard';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

const app = createApp(App)

app.use(router);
app.use(Antd);
app.use(hljsVuePlugin);
app.use(VueClipboard);
app.component('CopyWrapper', CopyWrapper);
app.component('HighLight', HighLight);

app.mount('#app');

