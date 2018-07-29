// ANIMATION / TWEEN LOGIC
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function customProperties(){
    // ADD NEW PROPERTIES TO DISPLAY ELEMENTS.
      // img1
      sources['img1'].props.opacity = 1;
      sources['img1'].props.src_x = 0;
      sources['img1'].props.src_Width = sources['img1'].width,
      sources['img1'].props.src_Height = sources['img1'].height,
      sources['img1'].props.destination_x = 0,
      sources['img1'].props.destination_y = 0,
      sources['img1'].props.destination_Width = sources['img1'].width,
      sources['img1'].props.destination_Height = sources['img1'].height

      //img2
      sources['img2'].props.opacity = 1;
      sources['img2'].props.src_x = 0;
      sources['img2'].props.src_y = 0,
      sources['img2'].props.src_Width = sources['img2'].width,
      sources['img2'].props.src_Height = sources['img2'].height,
      sources['img2'].props.destination_x = -150,
      sources['img2'].props.destination_y = 550,
      sources['img2'].props.destination_Width = sources['img2'].width,
      sources['img2'].props.destination_Height = sources['img2'].height

      //discover
      sources['discover'].props.opacity = 0;
      sources['discover'].props.src_x = 0;
      sources['discover'].props.src_y = 0;
      //logo
      sources['logo'].props.opacity = 1;
      sources['logo'].props.src_x = 0;
      sources['logo'].props.src_y = 500 ;

      //line
      sources['line'].props.opacity = 1;
      sources['line'].props.src_x = 0;
      sources['line'].props.src_y = 570;

      // clipRegion
      sources['img2_clip'] = new Object();
      sources['img2_clip'].props = {
        lineto_1_x:0,
        lineto_1_y:600,

        lineto_2_x:300,
        lineto_2_y:600,

        lineto_3_x:300,
        lineto_3_y:600,

        lineto_4_x:0,
        lineto_4_y: 600
      }


      // START ANIMATION
      animation();
}

draw.createObject = function(objName, obj){

}

function animation(){

  // img1
  //TweenLite.to(sources['img1'].props,1,{opacity:1});
  TweenLite.to(sources['img1'].props,5.5,{
    src_x: 0,
    src_y: 0,
    destination_x: 0,
    destination_y: -80,
    destination_Width: sources['img1'].width,
    destination_Height: sources['img1'].height,
    delay:1
  });

  TweenLite.to(sources['img1'].props,5.5,{
    destination_x: 0,
    destination_y: -140,

    delay:7.5
  });

  TweenLite.to(sources['img2_clip'].props,5,
  {
    lineto_1_x:0,
    lineto_1_y:265,

    lineto_2_x:300,
    lineto_2_y:265,

    lineto_3_x:300,
    lineto_3_y:600,

    lineto_4_x:0,
    lineto_4_y: 600
  });

  TweenLite.to(sources['img2_clip'].props,5,
  {
    lineto_1_x:0,
    lineto_1_y:155,

    lineto_2_x:300,
    lineto_2_y:155,

    lineto_3_x:300,
    lineto_3_y:600,

    lineto_4_x:0,
    lineto_4_y: 600,
    delay:7.5
  });


  // image 2
  TweenLite.to(sources['img2'].props,5.5,{
    destination_y:150,
    destination_x:-80,
    destination_Width: sources['img2'].width * 0.9,
    destination_Height: sources['img2'].height * 0.9,

  });

  //TweenLite.to(sources['img2'].props,7.5,{

  //});




  TweenLite.to(sources['line'].props,5.1,{src_y:237});
  TweenLite.to(sources['line'].props,4.8,{src_y:130,delay:7.5});
  TweenLite.to(sources['line'].props,1,{opacity:0,delay:10.7});
  TweenLite.to(sources['discover'].props,.5,{opacity:1,delay:10.7});

  // redraw element to canvas.
  window.requestAnimationFrame(draw);
}

// DRAW LOGIC
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function draw(){

      // clear canvas data ------------------------------------------------
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // MAIN CANVAS CONTEXT
      // FRAME 1
      draw.canvas_drawImage(ctx, sources['img1'], 9);

      // FRAME 2
      ctx.save();
      ctx.beginPath();
      ctx.lineTo(sources['img2_clip'].props.lineto_1_x, sources['img2_clip'].props.lineto_1_y);
      ctx.lineTo(sources['img2_clip'].props.lineto_2_x, sources['img2_clip'].props.lineto_2_y);
      ctx.lineTo(sources['img2_clip'].props.lineto_3_x, sources['img2_clip'].props.lineto_3_y);
      ctx.lineTo(sources['img2_clip'].props.lineto_4_x, sources['img2_clip'].props.lineto_4_y);
      ctx.clip();
      draw.canvas_drawImage(ctx, sources['img2'], 9);
      ctx.restore()

      // line
      draw.canvas_drawImage(ctx, sources['line'], 3);

      // logo
      draw.canvas_drawImage(ctx, sources['logo'], 3);

      // discover
      draw.canvas_drawImage(ctx, sources['discover'], 3);




      // redraw element to canvas.
      window.requestAnimationFrame(draw);
}

draw.canvas_customMask = function(myContext,obj){

  console.log(obj['mask']['object2']['resource'])

  /*
  var grd= ctx.createLinearGradient(
    obj.src_x0,
    obj.src_y0,
    obj.src_x1,
    obj.src_y1
  );

  grd.addColorStop(1,"rgba(0, 0, 0, 1)");
  grd.addColorStop(0,"rgba(239, 255, 65, 1)");

  // INCLUDE OPACITY
  if(obj.hasOwnProperty("opacity")){
    //myContext.globalAlpha =  obj.opacity;
  }


  //myContext.globalCompositeOperation = 'destination-atop';

  myContext.drawImage(sources['mask1'],20,20);
  myContext.fillStyle = 'red';
  myContext.beginPath();
  myContext.fillRect(39, 20, 210, 180);
  myContext.globalCompositeOperation = 'source-in';
//  myContext.globalCompositeOperation = 'source-in';


  myContext.fillStyle = grd;
  myContext.beginPath();
  myContext.fillRect(0, 0, 300, 250);
  myContext.globalCompositeOperation = 'destination-in';






  */




}

draw.canvas_gradientFill = function(myContext,obj){

  console.log(draw.canvas_solidFill)

    var grd= ctx.createLinearGradient(
      obj.src_x0,
      obj.src_y0,
      obj.src_x1,
      obj.src_y1
    );

    for (var i = 0; i < obj['addColorStop'].length; i++) {
      grd.addColorStop(obj['addColorStop'][i]['percent'],obj['addColorStop'][i]['color']);
    }

    // INCLUDE OPACITY
    if(obj.hasOwnProperty("opacity")){
      myContext.globalAlpha =  obj.opacity;
    }

    // FILL
    myContext.fillStyle = grd;
    myContext.beginPath();
    myContext.fillRect(obj.src_x, obj.src_y, obj.src_Width, obj.src_Height);
}

draw.canvas_solidFill = function(myContext,obj){

    myContext.globalAlpha =  obj.opacity;

    if(obj.props.hasOwnProperty("blendType")){
      myContext.globalCompositeOperation = obj.props.blendType;
    }

    myContext.beginPath();
    myContext.rect(obj.src_x, obj.src_y, obj.src_Width, obj.src_Height);
    myContext.fillStyle = obj.color;
    myContext.fill();

}

draw.canvas_drawImage = function(myContext, obj,arities) {

    myContext.save()

    if(obj.props.hasOwnProperty("opacity")){
      myContext.globalAlpha =  obj.props.opacity;
    }

    if(obj.props.hasOwnProperty("blendType")){
      myContext.globalCompositeOperation = obj.props.blendType;
    }

    if(arities == 3){

      myContext.drawImage(
          obj,
          obj.props.src_x,
          obj.props.src_y
      );

    }else if(arities == 5){

      myContext.drawImage(
          obj,
          obj.props.src_x,
          obj.props.src_y,
          obj.props.src_Width,
          obj.props.src_Height
      );

    }else if(arities == 9){
      myContext.drawImage(
          obj,
          obj.props.src_x,
          obj.props.src_y,
          obj.props.src_Width,
          obj.props.src_Height,
          obj.props.destination_x,
          obj.props.destination_y,
          obj.props.destination_Width,
          obj.props.destination_Height
      );
    }

    myContext.restore();


}
