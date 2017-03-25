window.onload = function() {

  let gridContainer = new GridContainer(500, 500);
  let grid = new Grid(50, 50, gridContainer.element);


  document.querySelector("#pixelPainter").appendChild(grid.container);



};