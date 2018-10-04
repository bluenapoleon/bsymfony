import riot from 'riot'
import myIndex from './tag/my-index.tag'

var createApp = function() {
  var app = {
    statuses: []
  }
  var i = 0;
  window.setInterval(function() {
    app.statuses.push({
      contents: `test${i}`,
      hashtag: "#testTag",
      account: {
        display_name: 'tester',
        screen_name: "@tester"
      }
    });
    riot.update();
    i++;
  }, 10000)

  return app;
};

riot.mount("my-index", {
  app: createApp(),
});