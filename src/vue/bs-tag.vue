<template lang="pug">
  .root
    bs-nav(title="imastodon.blue", :collapse="true")
    // include ../pug/_header.pug
    include ../pug/_timeline.pug
    include ../pug/_footer.pug
    bs-compose(:compose="app.compose")
</template>

<script>
import { createTimeline } from '../common'
import BsNav from './bs-nav.vue'
import BsCompose from './bs-compose.vue'

var paths = window.location.pathname.split("/");
var tag = paths[paths.length - 1];

export default {
  name: "bs-index",
  components: { BsNav, BsCompose },
  data () {
    return {
      app: createTimeline({
        rest: {
          api: `timelines/tag${tag}`,
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
