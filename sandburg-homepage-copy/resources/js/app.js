import { createApp } from 'vue'
import { createPinia } from 'pinia'                                                 // pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'                 // pinia, 세션에 저장되도록

// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)  // 세션에 저장되도록

import App from './app.vue'
import router from './router/index.js'

createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app")