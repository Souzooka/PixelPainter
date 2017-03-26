class ResizeGrid {
  constructor() {
    this._element = document.createElement("div");

    this._xDimInput = document.createElement("input");
    this._xDimInput.placeholder = "Custom Width";
    this._xDimInput.id = "custXinput";

    this._yDimInput = document.createElement("input");
    this._yDimInput.placeholder = "Custom Height";
    this._yDimInput.id = "custYinput";
    this._xRows = document.createElement("input");
    this._xRows.placeholder = "Custom Columns";
    this._xRows.id = "custRowInput";
    this._yRows = document.createElement("input");
    this._yRows.placeholder = "Custom Rows";
    this._yRows.id = "custColInput";
    this.resizeBtn = document.createElement("button");
    this.resizeBtn.innerHTML = "Create Custom Pixel Canvas";
    this.resizeBtn.id = "resizeBtn";

    this._element.appendChild(this._xDimInput);
    this._element.appendChild(this._yDimInput);
    this._element.appendChild(this._xRows);
    this._element.appendChild(this._yRows);
    this._element.appendChild(this.resizeBtn);

    this.resizeBtn.addEventListener("click", () => {
      let mainGrid = document.querySelector("#mainGrid");
      mainGrid.parentNode.removeChild(mainGrid);

      let gridContainer = new GridContainer(this._xDimInput.value, this._yDimInput.value);
      let grid = new Grid(this._xRows.value, this._yRows.value, gridContainer.element);
      console.log(grid.container.style.height);
      gridContainer.element.id = "mainGrid";
      let gridFuncs = gridFunctions();
      document.querySelector("#pixelPainter").appendChild(grid.container);
      gridFuncs.style(".gridDivs", grid.container.style.width, grid.container.style.height, grid.xDimensions, grid.yDimensions);
      let clearButton = new ClearButton(document.querySelectorAll(".gridDivs"), "Clear Grid");
      pixelPainter.appendChild(clearButton.element);
      clearButton.clearGrid();
    });
  }

  get element() {
    return this._element;
  }
}