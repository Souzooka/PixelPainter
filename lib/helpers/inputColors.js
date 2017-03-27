function inputColors(colorInput) {
  let colorInputBox = document.querySelector("#colorInput");
  let inputBtn = document.querySelector("#inputBtn");
  let saveBtn = document.querySelector("#savebtn");
  let customPalNode = document.querySelectorAll(".customPal");
  let clrCustomPal = document.querySelector("#clearCustomBtn");

  inputBtn.addEventListener("click", function() {
    colorInput.color = colorInputBox.value;
  });

  saveBtn.addEventListener("click", function() {
    customPalNode[saveBtn.attributes.counter.value].style["background-color"] = colorInputBox.value;
    saveBtn.attributes.counter.value ++;
    if (saveBtn.attributes.counter.value == 25) {
      saveBtn.setAttribute("counter", 0);
    }
  });

  clrCustomPal.addEventListener("click", function() {
    for (var i = 0; i  < 25; i++) {
      customPalNode[i].style["background-color"] = "white";
    }
    saveBtn.attributes.counter.value = 0;
  });
}