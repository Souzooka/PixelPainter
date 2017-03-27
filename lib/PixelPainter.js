class PixelPainter {
  constructor(selector, width, height, xPixels, yPixels) {
  let pixelPainter = document.querySelector(selector);
  let gridContainer = new GridContainer(width, height);
  let grid = new Grid(xPixels, yPixels, gridContainer.element);
  let gridFuncs = gridFunctions();
  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element, "colorDivs");
  let colorPicker = new ColorPicker();
  let clearButton = new ClearButton(document.querySelectorAll(".gridDivs"), "Clear Grid");
  let customPaletteBox = new GridContainer(100, 100);
  let customPalette = new ColorPalette(customPaletteBox.element, "customPal");
  let colorInput = new ColorInput(colorPicker, "Use Color");
  let resizeGrid = new ResizeGrid(colorPicker);

  gridContainer.element.id = "mainGrid";
  colorContainer.element.id = "colorGrid";
  pixelPainter.appendChild(grid.container);
  pixelPainter.appendChild(colorPal.container);
  paletteStyle(".colorDivs", false, colorPicker);
  gridFuncs.style(".gridDivs", grid.container.style.width, grid.container.style.height, grid.xDimensions, grid.yDimensions, colorPicker);
  pixelPainter.appendChild(clearButton.element);
  pixelPainter.appendChild(colorInput.element);
  customPaletteBox.element.id = "customGrid";
  pixelPainter.appendChild(customPaletteBox.element);
  paletteStyle(".customPal", ["white"], colorPicker);
  inputColors(colorPicker);
  clearButton.clearGrid();
  pixelPainter.appendChild(resizeGrid.element);
  }
}
