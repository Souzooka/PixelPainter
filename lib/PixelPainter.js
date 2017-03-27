class PixelPainter {
  constructor(selector, width, height, xPixels, yPixels) {
  let pixelPainter = document.querySelector(selector);

  let gridContainer = new GridContainer(width, height);
  let grid = new Grid(xPixels, yPixels, gridContainer.element);
  gridContainer.element.id = "mainGrid";
  let gridFuncs = gridFunctions();

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element, "colorDivs");
  colorContainer.element.id = "colorGrid";
  let colorPicker = new ColorPicker();

  pixelPainter.appendChild(grid.container);
  pixelPainter.appendChild(colorPal.container);

  paletteStyle(".colorDivs", false, colorPicker);

  gridFuncs.style(".gridDivs", grid.container.style.width, grid.container.style.height, grid.xDimensions, grid.yDimensions, colorPicker);

  let clearButton = new ClearButton(document.querySelectorAll(".gridDivs"), "Clear Grid");
  pixelPainter.appendChild(clearButton.element);

  let colorInput = new ColorInput(colorPicker, "Use Color");
  pixelPainter.appendChild(colorInput.element);


  let customPaletteBox = new GridContainer(100, 100);
  let customPalette = new ColorPalette(customPaletteBox.element, "customPal");
  customPaletteBox.element.id = "customGrid";
  pixelPainter.appendChild(customPaletteBox.element);
  paletteStyle(".customPal", ["white"]);

  inputColors();
  clearButton.clearGrid();

  let resizeGrid = new ResizeGrid();
  pixelPainter.appendChild(resizeGrid.element);
  }

}
