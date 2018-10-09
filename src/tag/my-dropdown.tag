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
      this.label = label;
      this.value = value;
    }

  style(type="text/stylus").
    .my-dropdown *
      visibility: none
      .my-dropdown__open
        visibility: visible

my-dropdown-item
  span(class="my-dropdown__item", onclick="{ select }") { opts.myLabel }

  script.
    function select(e) {
      this.parent.select(opts.myLabel, opts.myValue);
    }