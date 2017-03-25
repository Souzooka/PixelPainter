class Grid {
  constructor(x, y, container) {
    this._xDimensions = x || 10;
    this._yDimensions = y || 10;
    this._container = container;

    for (let i = 0; i < this._xDimensions; i++) {
      let row = document.createElement(("div"));
      row.className = "divRows";
      for (let i = 0; i < this._yDimensions; i++) {
        let element = document.createElement("div");
        element.className = "gridDivs";
        row.appendChild(element);
      }
      this._container.appendChild(row);
    }


  }
  get xDimensions() {
    return this._xDimensions;
  }

  get yDimensions() {
    return this._yDimensions;
  }

  get container() {
    return this._container;
  }




}
