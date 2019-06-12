<template lang="pug">
  el-menu(:collapse="collapse")
    el-menu-item(index="header", @click="collapse = !collapse")
      i.el-icon-arrow-right(v-if="collapse")
      i.el-icon-arrow-left(v-else)
      span(slot="title") {{ title }}
    template(v-if="!collapse")
      el-menu-item(v-for="(item, index) in items", @click="item.click")
        i(:class="item.styleClass")
        span(slot="title") {{ item.title }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "bs-index",
  props: ['title', 'collapse'],
  data: () => {
    return {
      items: [
        { title: "LTL", styleClass: "el-icon-document", click: () => {} },
        { title: "HOME", styleClass: "el-icon-document", click: () => {} },
        { title: "FTL", styleClass: "el-icon-document", click: () => {} },
        { title: "#あおのざつだん", styleClass: "el-icon-document", click: () => {} },
        { title: "#imas_cg", styleClass: "el-icon-document", click: () => {} },
        { title: "#imas_ml", styleClass: "el-icon-document", click: () => {} },
        { title: "検索", styleClass: "el-icon-document", click: () => {} },
        { title: "通知", styleClass: "el-icon-document", click: () => {} },
      ]
    }
  }
})
</script>
