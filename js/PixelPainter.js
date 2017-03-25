window.onload = function() {

  let gridContainer = new GridContainer(500, 500);
  let grid = new Grid(50, 50, gridContainer.element);

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element);


  document.querySelector("#pixelPainter").appendChild(grid.container);
  document.querySelector("#pixelPainter").appendChild(colorPal.container);

  (function giveColors() {
    let colorArray = ["red", "blue", "green", "black", "white", "orange", "yellow", "gray", "purple", "light-blue", "darkgray", "indianred", "cyan", "brown", "Beige", "Gold", "Pink", "Indigo", "Lime", "maroon", "Navy", "Orchid", "Peru", "RoyalBlue", "Silver"];
    let colorDivs = document.querySelectorAll(".colorDivs");
    for (var i = 0; i < colorDivs.length; i++) {
      colorDivs[i].style["background-color"] = colorArray[i];
    }
  })();
};