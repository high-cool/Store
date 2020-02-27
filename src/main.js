// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/rem";

import Vue from "vue";
import App from "./App";
import router from "./router";
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Search,
  Col,
  Row,
  Button,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Lazyload,
  Grid,
  GridItem,
  Divider,
  CountDown,
  Sidebar,
  SidebarItem,
  Icon,
  SwipeCell ,
  Card ,
  Field ,
  CellGroup,
  Checkbox, CheckboxGroup
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Search)
  .use(Col)
  .use(Row)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
Vue.use(Tab).use(Tabs);
Vue.use(Grid)
  .use(GridItem)
  .use(Divider);
Vue.use(CountDown);
Vue.use(Sidebar).use(SidebarItem);
Vue.use(Icon).use(SwipeCell ).use(Card ).use(Field ).use(CellGroup).use( Checkbox).use(CheckboxGroup)
Vue.config.productionTip = false;

Vue.filter("controlShow", (str, num) => {
  if (str.length <= num) {
    return str;
  } else {
    return str.substr(0, num - 1) + "...";
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
