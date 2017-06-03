/*jshint esversion:6*/

/** Class which creates a container and divs.
    Also implements a "virtual DOM".
    As in, it just keeps track of the previous state before updating things.**/
class Grid {
  /**
   * Create a grid of divs
   * @param {number} columns - The number of columns
   * @param {number} rows - The number of rows
   * @param {number} width - Width of the grid
   * @param {number} height - Height of the grid
   */
  constructor(columns = 10, rows = 10, width = 600, height = 600) {
    this._width = width;
    this._height = height;
    this._columns = columns;
    this._rows = rows;

    this._state = new Image(columns, rows).data;
    this.__previousState = this._state;

    this._containerElement = document.createElement('div');
    this._containerElement.className = 'grid-container';
    this._containerElement.style.width = `${width}px`;
    this._containerElement.style.height = `${height}px`;
    this._containerElement.style.display = 'flex';
    this._containerElement.style['flex-flow'] = 'row wrap';

    this._elements = new Array(height).fill(new Array(width).fill(null));

    for (let i = 0; i < columns; ++i) {
      for (let j = 0; j < rows; ++j) {
        let element = document.createElement('div');
        element.style.width = `${width/columns}px`;
        element.style.height = `${height/rows}px`;
        element.style['background-color'] = this._state[i][j].getColorCode();
        this._elements[i][j] = element;
        this._containerElement.appendChild(element);
      }
    }
  }

  // Getters and setters
  get containerElement() {
    return this._containerElement;
  }
}