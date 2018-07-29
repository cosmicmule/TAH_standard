var banner 							= banner || {} ;
var StopBanner = false;
var elementOffset = 2;
var canvas = document.getElementById("bannerCanvas");
var ctx = canvas.getContext("2d");
var total;
var currentCount  = 0;
var buffer = createCanvas(300,250);
var sources = [
                // FRAME 1
                {name: 'img1', path: 'images/img1.jpg'},
                {name: 'img2', path: 'images/img2.jpg'},
                {name: 'discover', path: 'images/discoverMana.png'},
                {name: 'logo', path: 'images/logo.png'},
                {name: 'line', path: 'images/line.png'}

              ]

function init(){
  // SET TOTAL ASSET COUNT FOR PRELOADER
  total = sources.length;
  // LOAD ASSETS INTO BANNER
  displayElements();
}

// ASSET PRELOADER + OBJECT CREATIONS
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function ImageAsset_Preloader(data){
  var element = new Image();
  element.name = data['name'];
  element.src = data['src'];
  element.onload = function()
    {
        // ADD BASIC PROPERTIES TO THIS ELEMENT
        element.props = {
          src_Width:    this.width,
          src_Height:   this.height,
          src_x:        0,
          src_y:        0,
        }
        element.canvas = createCanvas(this.width,this.height)
        // ADD + 1 CURRENT COUNT & if all is loaded start Banner.
        if (++currentCount >= total) {
            // customProperties lives in the animation.js file.
            customProperties();
        }
    }

    return element;
}

function displayElements(){
    for (var i = 0; i < sources.length; i++) {

      if(sources[i].path != undefined){
        sources[i] = new ImageAsset_Preloader(
          {
            src: sources[i].path,
            name: sources[i].name
          });
      }

      // ADD NAME KEY TO ARRAY
      sources[sources[i].name] = sources[i];
      // DELETE # KEY FROM ARRAY
      delete sources[i];
    }
}

function solidShapes_add(obj,objName){
    sources[objName] = obj
}


// TEMPERARY CANVAS.
// USAGE:
//var SOME_VARIABLE = createCanvas(1024,1024);
//SOME_VARIABLE.ctx.drawImage(myImage);  // put something on the canvas
//ctx.drawImage(SOME_VARIABLE,0,0);  // draw that canvas to another

function createCanvas(w,h){
      var canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.ctx = canvas.getContext("2d");

      return canvas;
}
