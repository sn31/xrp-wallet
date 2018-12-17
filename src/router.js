import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Account from "./views/Account.vue";
import Authentication from "./views/Authentication.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/account",
      name: "account",
      component: Account
    },
    {
      path: "/auth",
      name: "Auth",
      component: Authentication
    }
  ]
});
