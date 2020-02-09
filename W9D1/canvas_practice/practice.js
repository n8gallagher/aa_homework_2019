

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.height = 500;
  canvasEl.width = 500;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 200, 200);

  console.log(canvas);
 
});


