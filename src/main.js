import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-br'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/sass/app.scss'

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
