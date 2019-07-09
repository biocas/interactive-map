/*var canvas = document.getElementById('map-canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

img.onload = start;
img.src = 'img/1.1500_LIGHT.png';

function start() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
}
/*
//get DPI, canvas and context
var dpi = window.devicePixelRatio;

function fix_dpi() {
//get CSS height
//the + prefix casts it to an integer
//the slice method gets rid of "px"
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
//scale the canvas
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);
}
*/