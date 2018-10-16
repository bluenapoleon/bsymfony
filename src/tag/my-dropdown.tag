my-dropdown
  .my-dropdown(class="{my-dropdown__open: isOpen}")
    div(class="my-dropdown__label", onclick="{ toggle }")
      | { label }
    div.my-dropdown__menu
      yield.

  script.
    this.label = opts.defaultLabel;
    this.value = opts.defaultValue;
    toggle(e) {
      this.isOpen = !this.isOpen;
    }

    select(label, value) {
      console.log("test");
      this.label = label;
      this.value = value;
      this.toggle();
      this.update();
    }

  style(type="text/stylus").
    .my-dropdown
      width: 100%
    .my-dropdown.my-dropdown__open
      position: fixed
      display: block
      left: 0
      top 0
      margin: auto
      backgroud: white
    .my-dropdown > .my-dropdown__menu
      display: none
    .my-dropdown.my-dropdown__open > .my-dropdown__menu
      display: block

my-dropdown-item
  div(class="my-dropdown__item", onclick="{ doClose }") { opts.myLabel }

  script.
    doClose(e) {
      this.parent.select(opts.myLabel, opts.myValue);
    }
