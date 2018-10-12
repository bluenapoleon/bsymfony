import riot from 'riot'
import * as tootjs from 'tootjs'
import sanitizeHtml from 'sanitize-html'
import { EventEmitter } from 'events';

export var config = {
  "access_token": "---",
  "scope": "read write follow",
  "host": "==="
};

export var mastodon = new tootjs.Mastodon(config);

export var createTimeline = function(conf) {
  var app = {
    statuses: []
  }

  mastodon.get(conf.rest.api, conf.rest.query).then(resp => {
    for (let status of resp) {
      let viewStatus = {
        account: status.account,
        content: sanitizeHtml(status.content, {
          allowedTags: ['a']
        }),
        created_at: status.created_at
      };
      console.log(status);
      app.statuses.push(viewStatus);
    }
    app.statuses.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      } else if (a.created_at < b.created_at) {
        return 1;
      } else {
        return 0;
      }
    });
    riot.update();
  });

  var event = new EventEmitter();
  event.on('update', status => {
    app.statuses.unshift({
      account: status.account,
      content: sanitizeHtml(status.content, {
        allowedTags: ['a']
      })
    });
    riot.update();
  })
  mastodon.stream(conf.stream.api, conf.stream.query, event);

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
