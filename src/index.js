import Vue from 'vue'
import BsIndex from './vue/bs-index.vue'
import ELEMENT from 'element-ui'

Vue.use(ELEMENT)

new Vue({
  el: "#bs-app",
  components: { BsIndex }
})
