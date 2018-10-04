import riot from 'riot'
import myIndex from './tag/my-index.tag'

riot.mount("my-index", {
  statuses: [
    {
      contents: 'クソビビりなので夕方には洞穴にこもって採掘してる',
      hashtag: '#Minecraft',
      account: {
        display_name: 'ぽきぽにく',
        screen_name: '@kinopikop'
      }
    }
  ]
});