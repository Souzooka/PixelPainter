function inputColors() {
  let colorInputBox = document.querySelector("#colorInput");
  let inputBtn = document.querySelector("#inputBtn");

  colorInputBox.type = "text";

  inputBtn.addEventListener("click", function() {
    colorInput.picker.color = colorInputBox.value;
  });
}