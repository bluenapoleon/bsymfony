import Vue from 'vue'
import BsLogin from './vue/bs-login.vue'
import ELEMENT from 'element-ui'

Vue.use(ELEMENT)

new Vue({
  el: "#bs-app",
  components: { BsLogin }
})
