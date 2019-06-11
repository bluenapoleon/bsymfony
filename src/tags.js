import riot from 'riot'
import bsIndex from './tag/bs-index.tag'
import bsDropdown from './tag/bs-dropdown.tag'
import { createTimeline } from './common'

var paths = window.location.pathname.split("/");
var tag = paths[paths.length - 1];

riot.mount('bs-index', {
  app: createTimeline({
    rest: {
      api: `timelines/tag/${tag}`,
      query: {}
    },
    stream: {
      api: 'hashtag',
      query: { tag: tag }
    }
  })
});
