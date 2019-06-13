import Vue from 'vue'
import BsIndex from './vue/bs-index.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

new Vue({
  el: "#bs-app",
  components: { BsIndex }
})
