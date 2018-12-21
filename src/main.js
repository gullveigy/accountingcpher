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
import firebase from 'firebase';

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

Vue.config.productionTip = false


let app = '';
var config = {
  apiKey: "AIzaSyCbpVC54youafHVN4YzVqgEw4APIm8e6lI",
  authDomain: "cypher2.firebaseapp.com",
  databaseURL: "https://cypher2.firebaseio.com",
  projectId: "cypher2",
  storageBucket: "cypher2.appspot.com",
  messagingSenderId: "281514910066"
};
firebase.initializeApp(config);


/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


