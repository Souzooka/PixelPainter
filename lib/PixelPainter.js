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
  let sideBar = new SideBar();
  let sideBarDiv = sideBar.element;

  pixelPainter.appendChild(grid.container);
  pixelPainter.appendChild(sideBar.element);
  sideBarDiv.appendChild(colorPal.container);
  sideBarDiv.appendChild(customPaletteBox.element);
  sideBarDiv.appendChild(colorInput.element);
  sideBarDiv.appendChild(resizeGrid.element);
  sideBarDiv.appendChild(clearButton.element);

  gridContainer.element.id = "mainGrid";
  colorContainer.element.id = "colorGrid";
  colorContainer.element.className = "sideBar";
  customPaletteBox.element.id = "customGrid";
  customPaletteBox.element.className = "sideBar";

  paletteStyle(".colorDivs", false, colorPicker);
  paletteStyle(".customPal", ["white"], colorPicker);
  gridFuncs.style(".gridDivs", grid.container.style.width, grid.container.style.height, grid.xDimensions, grid.yDimensions, colorPicker);
  inputColors(colorPicker);
  clearButton.clearGrid();
  }
}
