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
    this._saveBtn = document.createElement("button");
    this._saveBtn.id = "savebtn";
    this._saveBtn.innerHTML = "Save Color";
    this._saveBtn.setAttribute("counter", 0);
    this._clearCustomBtn = document.createElement("button");
    this._clearCustomBtn.id = "clearCustomBtn";
    this._clearCustomBtn.innerHTML = "Reset Custom Color Palette";

    this._element.appendChild(this._input);
    this._element.appendChild(this._button);
    this._element.appendChild(this._saveBtn);
    this._element.appendChild(this._clearCustomBtn);
  }

  get element() {
    return this._element;
  }

  get picker() {
    return this._picker;
  }

}