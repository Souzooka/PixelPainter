function gridFunctions() {

  function style() {
    let gridDivs = document.querySelectorAll(".gridDivs");
    for (var j = 0; j < gridDivs.length; j++) {
      let width = Number(grid.container.style.width.replace(/[a-z]/gi, "") / grid.xDimensions);
      let height = Number(grid.container.style.height.replace(/[a-z]/gi, "") / grid.yDimensions);
      gridDivs[j].style.height = String(height) + "px";
      gridDivs[j].style.width = String(width) + "px";

      gridDivs[j].style["box-shadow"] = "inset 0px 0px 0px 1px black";
      gridDivs[j].style.display = "inline-block";
      gridDivs[j].style.padding = "-1px";

      gridDivs[j].addEventListener("mousedown", function() {
        this.style["background-color"] = colorPicker.color;
      });
      gridDivs[j].addEventListener("dragover", function() {
        this.style["background-color"] = colorPicker.color;
      });
    }
  }

  function clear() {
    let gridDivs = document.querySelectorAll(".gridDivs");
    for (var j = 0; j < gridDivs.length; j++) {
      gridDivs[j].style["background-color"] = "white";
    }
  }

  return {
    style,
    clear
  };

}