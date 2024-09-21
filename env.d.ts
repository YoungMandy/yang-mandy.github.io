/// <reference types="vite/client" />
export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $markdown: any;
  }
}
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
 
  export default component;
}
declare module '*.md' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}

declare module '*.js';
