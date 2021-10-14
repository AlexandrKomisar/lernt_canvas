// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(50, 50, 400, 400)

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0.5)";
      ctx.fillRect (0, 0, 150, 150);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (150, 150, 150, 150);

      ctx.fillStyle = "rgb(200,0,0.5)";
      ctx.fillRect (300, 0, 150, 150);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (450, 150, 150, 150);

      ctx.fillStyle = "rgb(200,0,0.5)";
      ctx.fillRect (600, 0, 150, 150);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (750, 150, 150, 150);
      
    };
    

    
}