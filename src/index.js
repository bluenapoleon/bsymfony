import riot from 'riot'
import myIndex from './tag/my-index.tag'
import * as tootjs from 'tootjs'
import sanitizeHtml from 'sanitize-html'

var config = {
  "access_token": "---",
  "scope": "read write follow",
  "host": "--"
};

var mastodon = new tootjs.Mastodon(config);

var createApp = function() {
  var app = {
    statuses: []
  }

  mastodon.get('timelines/home', {}).then(resp => {
    for (let status of resp) {
      let viewStatus = {
        account: status.account,
        content: sanitizeHtml(status.content, {
          allowedTags: []
        })
      };
      console.log(status);
      app.statuses.push(viewStatus);
    }
    riot.update();
  });

  return app;
};

riot.mount("my-index", {
  app: createApp(),
});