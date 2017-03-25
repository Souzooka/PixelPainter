function inputColors() {
  let colorInputBox = document.querySelector("#colorInput");
  let inputBtn = document.querySelector("#inputBtn");
  let saveBtn = document.querySelector("#savebtn");
  let customPalNode = document.querySelectorAll(".customPal");

  colorInputBox.type = "text";

  inputBtn.addEventListener("click", function() {
    colorInput.picker.color = colorInputBox.value;
  });

  saveBtn.addEventListener("click", function() {
    customPalNode[saveBtn.attributes.counter.value].style["background-color"] = colorInputBox.value;
    saveBtn.attributes.counter.value ++;
    if (saveBtn.attributes.counter.value == 25) {
      saveBtn.setAttribute("counter", 0);
    }
  });
}