my-index
  include ../pug/_nav.pug
  include ../pug/_header.pug
  .wrapper
    article.status.status_pub(each="{ status in opts.app.statuses }")
      .status_avater
        img(src="{ status.account.avatar }", alt="")
      .status_content
        a.text(href="#")
          p
            raw(content="{ this.innerHTML = status.content }")
            a.status_hashtag(href="#", each="{ tag in status.tags }") { tag }
        a.status_name(href="#")
          span.status_sc_name { status.account.display_name }
          span.id @{ status.account.username }
  include ../pug/_footer.pug
  include ../pug/_compose.pug
