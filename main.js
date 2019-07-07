/* .addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("map-canvas");
  canvas.width = canvas.width;
  canvas.height = canvas.height;
  var context = canvas.getContext("2d");
}, false); */

function drawShape (){
 var canvas = document.getElementById("map-canvas");
var context = canvas.getContext("2d");
canvas.width = canvas.width;
canvas.height = canvas.height;
//var map3 = document.getElementById("map3");
var img = new Image();
img.src = "img/map3.svg";
        context.drawImage(img, 0, 0);
      };

   
       