function styleFunctions() {
  let colorArray = ["red", "blue", "green", "black", "white", "orange", "yellow", "gray", "purple", "light-blue", "darkgray", "indianred", "cyan", "brown", "Beige", "Gold", "Pink", "Indigo", "Lime", "maroon", "Navy", "Orchid", "Peru", "RoyalBlue", "Silver"];

  let colorDivs = document.querySelectorAll(".colorDivs");
  let gridDivs = document.querySelectorAll(".gridDivs");

  for (var i = 0; i < colorDivs.length; i++) {
    let width = Number(colorPal.container.style.width.replace(/[a-z]/gi, "") / colorPal.xDime);
    let height = Number(colorPal.container.style.height.replace(/[a-z]/gi, "") / colorPal.yDime);
    colorDivs[i].style.height = String(height) + "px";
    colorDivs[i].style.width = String(width) + "px";

    colorDivs[i].style["background-color"] = colorArray[i];

    colorDivs[i].addEventListener("click", function() {
      colorPicker.color = this.style["background-color"];
    });

    colorDivs[i].style["box-shadow"] = "inset 0px 0px 0px 1px black";
    colorDivs[i].style.display = "inline-block";
    colorDivs[i].style["border-radius"] = "50%";
  }

  for (var j = 0; j < gridDivs.length; j++) {
    let width = Number(grid.container.style.width.replace(/[a-z]/gi, "") / grid.xDimensions);
    let height = Number(grid.container.style.height.replace(/[a-z]/gi, "") / grid.yDimensions);
    gridDivs[j].style.height = String(height) + "px";
    gridDivs[j].style.width = String(width) + "px";

    gridDivs[j].style["box-shadow"] = "inset 0px 0px 0px 1px black";
    gridDivs[j].style.display = "inline-block";
    gridDivs[j].style.padding = "-1px";

    gridDivs[j].addEventListener("click", function() {
      this.style["background-color"] = colorPicker.color;
    });
  }



}