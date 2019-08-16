import Vue from 'vue'
import BsTag from './vue/bs-tag.vue'
import ELEMENT from 'element-ui'

Vue.use(ELEMENT)

new Vue({
  el: "#bs-app",
  components: { BsTag }
})
