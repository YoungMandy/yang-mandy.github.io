import './styles/main.css'

import { createApp } from 'vue'
// APP是根组件
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
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

// 从这里开始创建Vue的应用实例
const app = createApp(App);
app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.error('app.config的报错', err);
};

app.use(router);
app.use(Antd);
app.use(hljsVuePlugin);
app.use(VueClipboard);
app.component('CopyWrapper', CopyWrapper);
app.component('HighLight', HighLight);

app.mount('#app');

