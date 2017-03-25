class ColorPicker {
  constructor() {
    this._color = "white";
  }
  get color() {
    return this._color;
  }
  set color(newVal) {
    this._color = newVal;
  }
}