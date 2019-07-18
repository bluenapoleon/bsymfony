import Vue from 'vue'
import BsLogin from './vue/bs-login.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

new Vue({
  el: "#bs-app",
  components: { BsLogin }
})
