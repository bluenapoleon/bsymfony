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
          bs-dropdown(default-label="公開範囲", default-value="default")
            bs-dropdown-item(bs-label="他サーバに公開", bs-value="public")
            bs-dropdown-item(bs-label="身内", bs-value="unlisted")
            bs-dropdown-item(bs-label="鍵付き", bs-value="private")
            bs-dropdown-item(bs-label="DM", bs-value="direct")
          ul.dropdown
            li
              a(href="#") 他サーバに公開
              ul
                li#list_public: a(href="#").privacy_list 他サーバに公開
                li#list_unlisted: a(href="#").privacy_list 身内
                li#list_private: a(href="#").privacy_list 鍵付き
                li#list_direct: a(href="#").privacy_list DM
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
      isNsfw: false
    }
  }
})
</script>

