/*jshint esversion:6*/
// Crazy note of the day: Could you image using a grid of divs, instead of a canvas, to render graphics? The performance would be something else.
// I'm talking full blown polygons, rasterized to your grid of divs, allowing you to enjoy monochromatic 60x60 3D games at 24fps.

/** Class representing a pixel.
  * Will ultimately be used in a matrix representing the complete image. */
class Pixel {
  /**
   * Create a pixel. Default color is white.
   * @param {number} r - Red color intensity.
   * @param {number} g - Green color intensity.
   * @param {number} b - Blue color intensity.
   */
  constructor(r = 255, g = 255, b = 255) {
    this._r = r;
    this._g = g;
    this._b = b;
  }

  /**
   * Convert this object's color values into a hex color code (e.g {255, 255, 255} => '#FFFFFF')
   * @return {string} This pixel's color intensity
   */
  getColorCode() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }

  // Getters and setters
  get r() {
    return this._r;
  }

  set r(r) {
    this._r = r;
  }

  get g() {
    return this._g;
  }

  set g(g) {
    this._g = g;
  }

  get b() {
    return this._b;
  }

  set b(b) {
    this._b = b;
  }
}