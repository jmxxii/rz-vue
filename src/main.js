import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/Home';
import ViewPrize from './components/ViewPrize';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/prize/:prizeID', component: ViewPrize},
  { path: '/signin', component: SignIn},
  { path: '/signup', component: SignUp}
];

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
