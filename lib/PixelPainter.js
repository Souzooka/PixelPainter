class PixelPainter {
  constructor(selector, width, height, xPixels, yPixels) {
  let pixelPainter = document.querySelector(selector);
  let gridContainer = new GridContainer(width, height);
  let grid = new Grid(xPixels, yPixels, gridContainer.element);
  let gridFuncs = gridFunctions();
  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element, "colorDivs");
  let colorPicker = new ColorPicker();
  let clearButton = new ClearButton(grid.container.childNodes, "Clear Grid");
  let customPaletteBox = new GridContainer(100, 100);
  let customPalette = new ColorPalette(customPaletteBox.element, "customPal");
  let colorInput = new ColorInput(colorPicker, "Use Color");
  let resizeGrid = new ResizeGrid(colorPicker);

  pixelPainter.appendChild(grid.container);
  pixelPainter.appendChild(colorPal.container);
  pixelPainter.appendChild(clearButton.element);
  pixelPainter.appendChild(colorInput.element);
  pixelPainter.appendChild(customPaletteBox.element);
  pixelPainter.appendChild(resizeGrid.element);

  gridContainer.element.id = "mainGrid";
  colorContainer.element.id = "colorGrid";
  customPaletteBox.element.id = "customGrid";

  paletteStyle(".colorDivs", false, colorPicker);
  paletteStyle(".customPal", ["white"], colorPicker);
  gridFuncs.style(".gridDivs", grid.container.style.width, grid.container.style.height, grid.xDimensions, grid.yDimensions, colorPicker);
  inputColors(colorPicker);
  clearButton.clearGrid();
  }
}
