class ClearButton {
  constructor(nodelist, buttonStr) {
    this._element = document.createElement("button");
    this._element.innerHTML = buttonStr;
    this._element.id = "clearBtn";
    this._element.className = "sideBar";
    this._nodelist = nodelist;
    this._length = this._nodelist.length;

    this._element.addEventListener("click", () => {
      this.clearGrid();
    });
  }

  clearGrid() {
    for (let i = 0; i < this._nodelist.length; i++) {
      for (let j = 0; j < this._nodelist[i].childNodes.length; j++) {
        this._nodelist[i].childNodes[j].style["background-color"] = "white";
      }
    }
  }

  get element() {
    return this._element;
  }
}