class SideBar {
  constructor() {
    this._element = document.createElement("div");
    this._element.id = "sideBarDiv";
  }

  get element() {
    return this._element;
  }
}