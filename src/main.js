import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router/router";
import {store} from "./store/store";
/*import BaseButton from "./components/BaseButton";
import BaseIcon from "./components/BaseIcon";
import BaseInput from "./components/BaseInput";

Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)*/

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')