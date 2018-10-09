my-dropdown
  div(class="my-dropdown {my-dropdown__open: isOpen}")
    span(class="my-dropdown__label", onclick="{ toggle }")
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
    .my-dropdown > .my-dropdown__menu
      visibility: hidden
    .my-dropdown.my-dropdown__open > .my-dropdown__menu
      visibility: visible

my-dropdown-item
  span(class="my-dropdown__item", onclick="{ doClose }") { opts.myLabel }

  script.
    doClose(e) {
      this.parent.select(opts.myLabel, opts.myValue);
    }