<template lang="pug">
  el-drawer(
    :visible.sync="visible"
    direction="ltr"
    :title="title"
    :before-close="() => $emit('close')"
  )
    template
      el-menu(:collapse="false")
        el-menu-item(v-for="(item, index) in items", :key="index", @click="item.click")
          i(:class="item.styleClass")
          template(v-slot:title) {{ item.title }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['title', 'visible'],
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
