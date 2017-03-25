class ColorPalette {
  constructor(container) {
    this._container = container;
    this._xDime = 5;
    this._yDime = 5;

    for (let j = 0; j < this._xDime; j++) {
      let colorRow = document.createElement("div");
      for (let k = 0; k < this._yDime; k++) {
        let eachCol = document.createElement("div");
        eachCol.className = "colorDivs";
        let width = Number(this._container.style.width.replace(/[a-z]/gi, "") / this._xDime);
        let height = Number(this._container.style.width.replace(/[a-z]/gi, "") / this._yDime);
        eachCol.style.height = String(width) + "px";
        eachCol.style.width = String(height) + "px";
        eachCol.style["box-shadow"] = "inset 0px 0px 0px 1px black";
        eachCol.style.display = "inline-block";
        eachCol.style.padding = "-1px";
        colorRow.appendChild(eachCol);
      }
      this._container.appendChild(colorRow);
    }
  }

  get container() {
    return this._container;
  }
}