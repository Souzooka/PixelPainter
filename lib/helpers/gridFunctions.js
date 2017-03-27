function gridFunctions() {

  function style(className, w, h, x, y, colorPicker) {
    let gridDivs = document.querySelectorAll(className);
    for (var j = 0; j < gridDivs.length; j++) {
      let width = Number(w.replace(/[a-z]/gi, "") / y);
      let height = Number(h.replace(/[a-z]/gi, "") / x);
      gridDivs[j].style.height = String(height) + "px";
      gridDivs[j].style.width = String(width) + "px";
      gridDivs[j].style["box-shadow"] = "inset 0px 0px 0px 0.05px black";
      gridDivs[j].style.display = "inline-block";

      gridDivs[j].addEventListener("mousedown", function() {
        this.style["background-color"] = colorPicker.color;
      });

      gridDivs[j].addEventListener("dragover", function() {
        this.style["background-color"] = colorPicker.color;
      });
    }
  }

  return {
    style,
  };

}