function inputColors(colorInput) {
  let colorInputBox = document.querySelector("#colorInput");
  console.log(colorInputBox)
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
    let customCount = saveBtn.attributes.counter.value;
    for (var i = 0; i  < customCount; i++) {
      customPalNode[i].style["background-color"] = "white";
    }
    saveBtn.attributes.counter.value = 0;
  });
}