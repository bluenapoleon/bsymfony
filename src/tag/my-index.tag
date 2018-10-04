my-index
  include ../pug/_nav.pug
  include ../pug/_header.pug
  .wrapper
    article.status.status_pub(each="{ status in opts.app.statuses }")
      .status_avater
        img(src="{ status.avator_url }", alt="")
      .status_content
        a.text(href="#")
          p { status.contents }
            a.status_hashtag(href="#") { status.hashtag }
        a.status_name(href="#")
          span.status_sc_name { status.account.display_name }
          span.id { status.account.screen_name }
  include ../pug/_footer.pug
