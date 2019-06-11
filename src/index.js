import riot from 'riot'
import bsIndex from './tag/bs-index.tag'
import bsDropdown from './tag/bs-dropdown.tag'
import { createTimeline } from './common'

riot.mount('bs-index', {
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
});
