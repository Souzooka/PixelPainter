/*jshint esversion:6*/
'use strict';

console.log(new Pixel(240, 30, 200).getColorCode());
console.log(new Image(5, 20, {r: 240, g: 30, b: 200}));
const grid = new Grid(10, 10, 600, 600);
document.querySelector('#pixel-painter-container').appendChild(grid.containerElement);
