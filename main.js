window.addEventListener("load", function() {
    var svgObject = document.getElementById('object').contentDocument; 
    
    var svg = svgObject.getElementById('Base_2')
      console.log(svg);   
    /* adds ids to all caravan parks markers */
    var Cmarker = svgObject.getElementsByClassName('cls-63');
    Cmarker[0].setAttributeNS(null, 'id', 'Caravan-Park');
    Cmarker[1].setAttributeNS(null, 'id', 'rest-a-while');
    Cmarker[2].setAttributeNS(null, 'id', 'barneys');
    
    /* loop to add button attributes to caravan markers */
    for (var i = 0; i < Cmarker.length; i++) {
        Cmarker[i].setAttributeNS(null, 'type', 'button');
        Cmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Cmarker[i].setAttributeNS(null, 'role', 'button' );
        Cmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        }
    

    /* adds ids to all hotel markers */
    var Hmarker = svgObject.getElementsByClassName('cls-61');
    Hmarker[0].setAttributeNS(null, 'id','Royal'); 
    Hmarker[1].setAttributeNS(null, 'id','Gilgandra');
    Hmarker[2].setAttributeNS(null, 'id','Orana-Windmill');
    Hmarker[3].setAttributeNS(null, 'id','Three-ways');
    Hmarker[4].setAttributeNS(null, 'id','Bungalow');
    Hmarker[5].setAttributeNS(null, 'id','Silver-oaks');
    Hmarker[6].setAttributeNS(null, 'id','Cooee-Motel');
    Hmarker[7].setAttributeNS(null, 'id','Motor-Inn');
    Hmarker[8].setAttributeNS(null, 'id','Railway-Hotel');
    Hmarker[9].setAttributeNS(null, 'id','Lodge');
    
     /* loop to add button attributes to hotel markers */
    for (var i = 0; i < Hmarker.length; i++) {
        Hmarker[i].setAttributeNS(null, 'type', 'button');
        Hmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Hmarker[i].setAttributeNS(null, 'role', 'button' );
        Hmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        }
    
    $('#Caravan-Park').click(function() {
        
        });
    
     });
    
     


   

/*
	type="button" class="marker btn" data-toggle="collapse" data-target="#info" role="button" aria-expanded="false"


CANVAS FUNCTIONALITY SETUP - HERE JUST IN CASE WE NEED IT BACK


var canvas = document.getElementById('map-canvas');
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