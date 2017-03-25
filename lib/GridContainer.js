class GridContainer {
  constructor(width, height) {
    this._element = document.createElement("div");
    this._element.style.width = String(width);
    this._element.style.height = String(height);
  }

  get element() {
    return this._element;
  }
}