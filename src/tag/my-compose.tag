my-compose
  form#post(onsubmit="{ compose }", action="javascript:void(0)")
    .post_top
      input#cwtgl(type="checkbox", name="cw")
      label#oncw(for="cwtgl") 注意文
      textarea#cwtext(ref="cwtext", name="cwtext", placeholder="もう時間がないんです！")
    .post_wrap
      .post_left
        .upload_imgs
        a#cm_upload(href="#") 📷
        input#nsfwtgl(type="checkbox", name="nsfw")
        label#onnsfw(for="nsfwtgl") NSFW
      .post_right
        textarea#toottext(ref="toottext", name="toot", placeholder="あふぅ")
        .post_bottom
          my-dropdown(default-label="公開範囲", default-value="default")
            my-dropdown-item(my-label="他サーバに公開", my-value="public")
            my-dropdown-item(my-label="身内", my-value="unlisted")
            my-dropdown-item(my-label="鍵付き", my-value="private")
            my-dropdown-item(my-label="DM", my-value="direct")
          ul.dropdown
            li
              a(href="#") 他サーバに公開
              ul
                li#list_public: a(href="#").privacy_list 他サーバに公開
                li#list_unlisted: a(href="#").privacy_list 身内
                li#list_private: a(href="#").privacy_list 鍵付き
                li#list_direct: a(href="#").privacy_list DM
          input#cm_post(type="submit", value="Toot!")
  script.
    compose(e) {
      var status = {
        status: this.refs.toottext.value
      };
      opts.compose(status);
    }
