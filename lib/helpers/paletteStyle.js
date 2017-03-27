'use strict';
function paletteStyle(className, colorArr, colorPicker) {
  let colorArray = colorArr || ["red", "blue", "green", "black", "white",
                                "orange", "yellow", "gray", "purple", "light-blue",
                                "darkgray", "indianred", "cyan", "brown", "Beige",
                                "Gold", "Pink", "Indigo", "Lime", "maroon", "Navy",
                                "Orchid", "Peru", "RoyalBlue", "Silver"];
  let colorDivs = document.querySelectorAll(className);

  for (var i = 0; i < colorDivs.length; i++) {
    // FIXME: Unhardcodeme
    let width = Number(100 / 5);
    let height = Number(100 / 5);

    colorDivs[i].style.height = String(height) + "px";
    colorDivs[i].style.width = String(width) + "px";
    colorDivs[i].style["background-color"] = colorArray[i];
    colorDivs[i].style["box-shadow"] = "inset 0px 0px 0px 1px black";
    colorDivs[i].style.display = "inline-block";
    colorDivs[i].style["border-radius"] = "50%";

    colorDivs[i].addEventListener("click", function() {
      colorPicker.color = this.style["background-color"];
    });
  }
}
