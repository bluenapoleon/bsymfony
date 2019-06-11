bs-dropdown
  .bs-dropdown(class="{bs-dropdown__open: isOpen}")
    div(class="bs-dropdown__label", onclick="{ toggle }")
      | { label }
    div.bs-dropdown__menu
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
    .bs-dropdown
      width: 100%
    .bs-dropdown.bs-dropdown__open
      position: fixed
      display: block
      left: 0
      top 0
      margin: auto
      backgroud: white
    .bs-dropdown > .bs-dropdown__menu
      display: none
    .bs-dropdown.bs-dropdown__open > .bs-dropdown__menu
      display: block

bs-dropdown-item
  div(class="bs-dropdown__item", onclick="{ doClose }") { opts.myLabel }

  script.
    doClose(e) {
      this.parent.select(opts.myLabel, opts.myValue);
    }
