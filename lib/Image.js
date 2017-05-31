/*jshint esversion:6*/

/** Class representing a complete, rectangular RGB image*/
class Image {
  /**
   * Create an image made up of Pixel objects.
   * @param {number} width - The image's width
   * @param {number} height - The image's height
   * @param {object} {r, g, b} - Represents the image's default color
   */
  constructor(width = 10, height = 10, defaultColor = {r: 255, g: 255, b: 255}) {
    this._width = width;
    this._height = height;

    // Create a matrix of white pixels according to the provided dimensions
    this._data = new Array(height).fill(new Array(width).fill(new Pixel(defaultColor.r, defaultColor.g, defaultColor.b)));
  }

  // Getters and setters
  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }
}