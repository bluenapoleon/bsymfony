import * as tootjs from 'tootjs'
import sanitizeHtml from 'sanitize-html'
import { EventEmitter } from 'events';
import * as Cookies from 'js-cookie'

export var config = {
  "access_token": Cookies.get('token'),
  "scope": "read write follow",
  "host": localStorage.getItem("domain")
};

export var mastodon = new tootjs.Mastodon(config);

export var createTimeline = function(conf) {
  var app = {
    statuses: []
  }

  app.compose = (status) => {
    mastodon.post("statuses", status)
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
  });

  var event = new EventEmitter();
  event.on('update', status => {
    app.statuses.unshift({
      account: status.account,
      content: sanitizeHtml(status.content, {
        allowedTags: ['a']
      })
    });
  })
  mastodon.stream(conf.stream.api, conf.stream.query, event);

  return app;
};
