import riot from 'riot'
import myIndex from './tag/my-index.tag'
import * as tootjs from 'tootjs'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

var client = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

var config = {
  "access_token": "fugafuga",
  "scope": "read write follow",
  "host": "hogehoge"
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