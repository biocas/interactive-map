alert('hello world!');

var canvas = document.getElementById('map-canvas');
var ctx = canvas.getContext('2d');

var img = new Image();

img.onload = function(){
canvas.width = img.naturalWidth
canvas.height = img.naturalHeight
ctx.drawImage(img, 0, 0);
}

img.src = 'img/map3.svg';