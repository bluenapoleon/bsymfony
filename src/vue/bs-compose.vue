<template lang="pug">
  form#post(@submit.prevent="compose({ status: toot })")
    .post_top
      input#cwtgl(type="checkbox", name="cw")
      label#oncw(for="cwtgl") 注意文
      textarea#cwtext(v-model="cwText", name="cwtext", placeholder="もう時間がないんです！")
    .post_wrap
      .post_left
        .upload_imgs
        a#cm_upload(href="#") 📷
        input#nsfwtgl(v-model="isNsfw", type="checkbox", name="nsfw")
        label#onnsfw(for="nsfwtgl") NSFW
      .post_right
        textarea#toottext(v-model="toot" name="tootText", placeholder="あふぅ")
        .post_bottom
          el-select(v-model="publicity", placeholder="公開範囲")
            el-option(label="他サーバに公開", value="public")
            el-option(label="身内", value="unlisted")
            el-option(label="鍵付き", value="private")
            el-option(label="DM", value="direct")
          input#cm_post(type="submit", value="Toot!")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ["compose"],
  data: () => {
    return {
      toot: "",
      cwText: "",
      isNsfw: false,
      publicity: "public"
    }
  }
})
</script>

