import riot from 'riot'
import myIndex from './tag/my-index.tag'
import * as tootjs from 'tootjs'
import axios from 'axios'

var client = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

var config = {
  "access_token": "自分の入れてね",
  "scope": "read write follow",
  "host": "自分で入れてね"
};

var mastodon = new tootjs.Mastodon(config);

mastodon.get('/timelines/home', {}).then(resp => {
  for (let status of resp) {
    console.log(status);
  }
});

var createApp = function() {
  var app = {
    statuses: []
  }

  return app;
};

riot.mount("my-index", {
  app: createApp(),
});