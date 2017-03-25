

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
        let width = Number(this._container.style.width.replace(/[a-z]/gi, "") / this._xDimensions);
        let height = Number(this._container.style.width.replace(/[a-z]/gi, "") / this._yDimensions);
        element.style.height = String(width) + "px";
        element.style.width = String(height) + "px";
        element.style["box-shadow"] = "inset 0px 0px 0px 1px black";
        element.style.display = "inline-block";
        element.style.padding = "-1px";
        row.appendChild(element);
      }
      this._container.appendChild(row);
    }


  }

  get container() {
    return this._container;
  }




}
