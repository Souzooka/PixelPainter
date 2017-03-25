window.onload = function() {

  let gridContainer = new GridContainer(800, 800);
  let grid = new Grid(10, 10, gridContainer.element);


  document.querySelector("#pixelPainter").appendChild(grid.container);



};