class ColorInput {
  constructor(picker) {
    this._picker = picker;
    this._element = document.createElement("div");
    this._element.className = "color-input";
    this._input = document.createElement("input");
    this._button = document.createElement("button");

    this._element.appendChild(this._input);
    this._element.appendChild(this._button);
  }
}