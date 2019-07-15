window.addEventListener("load", function() {
    var svgObject = document.getElementById('object').contentDocument; 
        console.log(svgObject);
    var svg = svgObject.getElementById('MAP_1')
      console.log(svg);   
   
/* loop to add button attributes to caravan markers */
    var Cmarker = svgObject.getElementsByClassName('st393');
    for (var i = 0; i < Cmarker.length; i++) {
        Cmarker[i].setAttributeNS(null, 'type', 'button');
        Cmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Cmarker[i].setAttributeNS(null, 'role', 'button' );
        Cmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        $(Cmarker[i]).addClass('marker');
        }
        
/* loop to add button attributes to hotel markers */
     var Hmarker = svgObject.getElementsByClassName('st392');
    for (var i = 0; i < Hmarker.length; i++) {
        Hmarker[i].setAttributeNS(null, 'type', 'button');
        Hmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Hmarker[i].setAttributeNS(null, 'role', 'button' );
        Hmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        $(Hmarker[i]).addClass('marker');
        }
    
/* loop to add button attributes to business markers */
     var Bmarker = svgObject.getElementsByClassName('st394');
    for (var i = 0; i < Bmarker.length; i++) {
        Bmarker[i].setAttributeNS(null, 'type', 'button');
        Bmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Bmarker[i].setAttributeNS(null, 'role', 'button' );
        Bmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        $(Bmarker[i]).addClass('marker');
        }
    
 /* loop to add button attributes to education markers */
     var Emarker = svgObject.getElementsByClassName('st398');
    for (var i = 0; i < Emarker.length; i++) {
        Emarker[i].setAttributeNS(null, 'type', 'button');
        Emarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Emarker[i].setAttributeNS(null, 'role', 'button' );
        Emarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        $(Emarker[i]).addClass('marker');
        }
    
/* loop to add button attributes to community facilities markers */
     var Fmarker = svgObject.getElementsByClassName('st397');
    for (var i = 0; i < Fmarker.length; i++) {
        Fmarker[i].setAttributeNS(null, 'type', 'button');
        Fmarker[i].setAttributeNS(null, 'data-toggle', 'collapse');
        Fmarker[i].setAttributeNS(null, 'role', 'button' );
        Fmarker[i].setAttributeNS(null, 'aria-expanded', 'false');
        $(Fmarker[i]).addClass('marker');
        }
    
    var ThreePurple = svgObject.getElementsByClassName('st396');
     for (var i = 0; i < ThreePurple.length; i++) {
    ThreePurple[i].setAttributeNS(null, 'type', 'button');
    ThreePurple[i].setAttributeNS(null, 'data-toggle', 'collapse');
    ThreePurple[i].setAttributeNS(null, 'role', 'button' );
    ThreePurple[i].setAttributeNS(null, 'aria-expanded', 'false');
    $(ThreePurple[i]).addClass('marker');
     }
    var markers = svgObject.getElementsByClassName('marker');
    console.log(markers);

   /* adds ids to all  markers   */
    

    markers[0].setAttributeNS(null, 'id', 'Royal');
    markers[1].setAttributeNS(null, 'id','Gilgandra');
    markers[2].setAttributeNS(null, 'id','Tattersalls');
    markers[3].setAttributeNS(null, 'id','Chinnock');
    markers[4].setAttributeNS(null, 'id','Castlereagh');
    markers[5].setAttributeNS(null, 'id','Orana-Windmill');
    markers[6].setAttributeNS(null, 'id','Three-ways');
    markers[7].setAttributeNS(null, 'id','Bungalow');
    markers[8].setAttributeNS(null, 'id','Silver-oaks');
    markers[9].setAttributeNS(null, 'id','Alfa');
    markers[10].setAttributeNS(null, 'id','Cooee');
    markers[11].setAttributeNS(null, 'id','Village');
    markers[12].setAttributeNS(null, 'id','Railway');
    markers[13].setAttributeNS(null, 'id','Lodge');
    markers[14].setAttributeNS(null, 'id','Acropolis');
    markers[15].setAttributeNS(null, 'id','Rest-a-while');
    markers[16].setAttributeNS(null, 'id','Caravan');
    markers[17].setAttributeNS(null, 'id','Caltex');
    markers[18].setAttributeNS(null, 'id','Cactus');
    markers[19].setAttributeNS(null, 'id','Shelley');
    markers[20].setAttributeNS(null, 'id','IGA');
    markers[21].setAttributeNS(null, 'id','RSL');
    markers[22].setAttributeNS(null, 'id','Hitchen');
    markers[23].setAttributeNS(null, 'id','Police');
    markers[24].setAttributeNS(null, 'id','Aboriginal');
    markers[25].setAttributeNS(null, 'id','Youth');
    markers[26].setAttributeNS(null, 'id','Aerodrome');
    markers[27].setAttributeNS(null, 'id','Rural');
    markers[28].setAttributeNS(null, 'id','Historical');
    markers[29].setAttributeNS(null, 'id','Heritage');
    markers[30].setAttributeNS(null, 'id','Sporties');
    markers[31].setAttributeNS(null, 'id','Council');
    markers[32].setAttributeNS(null, 'id','Pool');
    markers[33].setAttributeNS(null, 'id','Library');
    markers[34].setAttributeNS(null, 'id','Court');
    markers[35].setAttributeNS(null, 'id','Hospital');
    markers[36].setAttributeNS(null, 'id','Preschool');
    markers[37].setAttributeNS(null, 'id','TAFE');
    markers[38].setAttributeNS(null, 'id','High-school');
    markers[39].setAttributeNS(null, 'id','Public-school');
    markers[40].setAttributeNS(null, 'id','Josephs');
   
    
    
   /*  var CaravanPark = svgObject.getElementById('Caravan-Park');
CaravanPark.addEventListener('click', function(){
	console.log('yessss');
            });
    
   $('#Caravan-Park').click(function() {
        
        });*/
    
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