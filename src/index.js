import riot from 'riot'
import myIndex from './tag/my-index.tag'
import * as tootjs from 'tootjs'
import sanitizeHtml from 'sanitize-html'
import { EventEmitter } from 'events';

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
          allowedTags: ['a']
        })
      };
      console.log(status);
      app.statuses.push(viewStatus);
    }
    app.statuses.reverse()
    riot.update();
  });

  var event = new EventEmitter();
  event.on('update', status => {
    app.statuses.unshift({
      account: status.account,
      content: sanitizeHtml(status.content, {
        allowedTags: ['a']
      })
    })
    riot.update();
  })
  mastodon.stream('user', event);

  return app;
};

riot.tag('raw', '<span></span>', function (opts) {
  this.updateContent = function () {
      this.root.innerHTML = opts.content;
  };

  this.on('update', function() {
      this.updateContent();
  });

  this.updateContent();
});

riot.mount("my-index", {
  app: createApp(),
});