// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import APlayer from '@moefe/vue-aplayer';

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

Vue.config.productionTip = false


/* eslint-disable no-new */
 new Vue({
      el: '#app',
      router,
      components: {App},
      template: '<App/>'
    })


