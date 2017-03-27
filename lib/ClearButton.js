class ClearButton {
  constructor(nodelist, buttonStr) {
    this._element = document.createElement("button");
    this._element.innerHTML = buttonStr;
    this._element.id = "clearBtn";
    this._nodelist = nodelist;
    this._length = this._nodelist.length;

    this._element.addEventListener("click", () => {
      this.clearGrid();
    });
  }

  clearGrid() {
    for (let i = 0; i < this._nodelist.length; i++) {
        this._nodelist[i].style["background-color"] = "white";
      }
  }

  get element() {
    return this._element;
  }
}