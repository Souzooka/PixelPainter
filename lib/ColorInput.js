class ColorInput {
  constructor(picker, btnStr) {
    this._picker = picker;
    this._element = document.createElement("div");
    this._element.className = "color-input";
    this._input = document.createElement("input");
    this._input.id = "colorInput";
    this._button = document.createElement("button");
    this._button.id = "inputBtn";
    this._button.innerHTML = btnStr;

    this._element.appendChild(this._input);
    this._element.appendChild(this._button);
  }

  get element() {
    return this._element;
  }

  get picker() {
    return this._picker;
  }

}