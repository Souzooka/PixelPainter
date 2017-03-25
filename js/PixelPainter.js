  let pixelPainter = document.querySelector("#pixelPainter");

  let gridContainer = new GridContainer(1000, 1000);
  let grid = new Grid(100, 100, gridContainer.element);
  let gridFuncs = gridFunctions();

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element);
  let colorPicker = new ColorPicker();

  document.querySelector("#pixelPainter").appendChild(grid.container);
  document.querySelector("#pixelPainter").appendChild(colorPal.container);

  paletteStyle();
  gridFuncs.style();

  let clearButton = new ClearButton(document.querySelectorAll(".gridDivs"), "Clear Grid");
  pixelPainter.appendChild(clearButton.element);



