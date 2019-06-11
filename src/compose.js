import { mastodon } from './common'

export var compose = function(status) {
  mastodon.post("statuses", status)
};
