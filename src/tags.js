import Vue from 'vue'
import BsTag from './vue/bs-tag.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

new Vue({
  el: "#bs-app",
  components: { BsTag }
})
