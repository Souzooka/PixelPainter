

  let gridContainer = new GridContainer(500, 500);
  let grid = new Grid(10, 10, gridContainer.element);

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element);
  let colorPicker = new ColorPicker();


  document.querySelector("#pixelPainter").appendChild(grid.container);
  document.querySelector("#pixelPainter").appendChild(colorPal.container);

  styleFunctions();