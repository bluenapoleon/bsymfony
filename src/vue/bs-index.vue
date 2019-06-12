<template lang="pug">
  .root
    bs-nav(title="imastodon.blue", :collapse="true")
    // include ../pug/_header.pug
    .wrapper
      article.status.status_pub(v-for="status in app.statuses")
        .status_avater
          img(:src="status.account.avatar", alt="")
        .status_content
          a.text(href="#")
            p
              div(v-html="status.content")
              a.status_hashtag(href="#", v-for="tag in status.tags") { tag }
          a.status_name(href="#")
            span.status_sc_name {{ status.account.display_name }}
            span.id @{{ status.account.username }}
    include ../pug/_footer.pug
    include ../pug/_compose.pug
</template>

<script>
import { createTimeline } from '../common'
import BsNav from './bs-nav.vue'
export default {
  name: "bs-index",
  components: { BsNav },
  data () {
    return {
      app: createTimeline({
        rest: {
          api: 'timelines/home',
          query: {}
        },
        stream: {
          api: 'user',
          query: {}
        }
      })
    }
  }
}
</script>

