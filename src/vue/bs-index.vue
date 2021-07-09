<template lang="pug">
  .root
    include ../pug/_header.pug
    bs-nav(title="imastodon.blue", :visible="menuOpen" @close="menuOpen = false")
    include ../pug/_timeline.pug
    include ../pug/_footer.pug
    bs-compose(:compose="timeline.compose")
</template>

<script>
import { createTimeline } from '../common'
import BsNav from './bs-nav.vue'
import BsCompose from './bs-compose.vue'

export default {
  components: { BsNav, BsCompose },
  data () {
    return {
      menuOpen: false,
      timeline: createTimeline({
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

