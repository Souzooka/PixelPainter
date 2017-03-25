
  let gridContainer = new GridContainer(5000, 5000);
  let grid = new Grid(20, 20, gridContainer.element);

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element);
  let colorPicker = new ColorPicker();


  document.querySelector("#pixelPainter").appendChild(grid.container);
  document.querySelector("#pixelPainter").appendChild(colorPal.container);

  gridStyle();
  paletteStyle();