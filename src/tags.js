import riot from 'riot'
import myIndex from './tag/my-index.tag'
import myDropdown from './tag/my-dropdown.tag'
import { createTimeline } from './common'

var paths = window.location.pathname.split("/");
var tag = paths[paths.length - 1];

riot.mount('my-index', {
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