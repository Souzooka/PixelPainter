window.onload = function() {

  let gridContainer = new GridContainer(1000, 1000);
  let grid = new Grid(100, 100, gridContainer.element);


  document.querySelector("#pixelPainter").appendChild(grid.container);



};