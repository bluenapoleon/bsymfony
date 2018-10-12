import riot from 'riot'
import myIndex from './tag/my-index.tag'
import myDropdown from './tag/my-dropdown.tag'
import { createTimeline } from './common'

riot.mount('my-index', {
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