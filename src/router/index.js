import Vue from "vue";
import Router from "vue-router";
import Index from "../Pages/Index";
import Cate from "../Pages/Cate";
import Buy from "../Pages/Buy";
import Cart from "../Pages/Cart";
import My from "../Pages/My";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/cate",
      component: Cate
    },
    {
      path: "/buy",
      component: Buy
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/my",
      component: My
    }
  ]
});
