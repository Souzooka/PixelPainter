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
        colorRow.appendChild(eachCol);
      }
      this._container.appendChild(colorRow);
    }
  }
  get xDime() {
    return this._xDime;
  }

  get yDime() {
    return this._yDime;
  }

  get container() {
    return this._container;
  }
}