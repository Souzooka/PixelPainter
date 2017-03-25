class Grid {
  constructor(x, y) {
    this._xDimensions = x || 10;
    this._yDimensions = y || 10;
  }

  init(element) {
    for (let i = 0; i < this._xDimensions; i++) {
      for (let i = 0; i < this._yDimensions; i++) {
        let element = document.createElement("div");
        element.style.height = "10px";
        element.style.width = "10px";
      }
    }

  }




}
