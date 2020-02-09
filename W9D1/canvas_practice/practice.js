document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas");
  canvas.height = 500;
  canvas.width = 500;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle(`rgb(255,255,255)`);
  ctx.fillRect(20, 20, 100, 125);
 
});

// const canvas = Document.getElementById("mycanvas");
// canvas.height = 500;
// canvas.width = 500;
// const ctx = canvas.getContext('2d');

// canvas.fillStyle(`rgb(255,255,255)`);
// ctx.fillRect(20, 20, 100, 125);
