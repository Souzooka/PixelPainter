class GridContainer {
  constructor(width, height) {

    if (typeof width !== "number" || width <= 0 || Math.abs(width) === Infinity) {
      width = null;
    }

    if (typeof height !== "number" || height <= 0 || Math.abs(height) === Infinity) {
      height = null;
    }

    this._element = document.createElement("div");
    this._element.style.width = (width || "500") + "px";
    this._element.style.height = (height || "500") + "px";
  }

  get element() {
    return this._element;
  }
}