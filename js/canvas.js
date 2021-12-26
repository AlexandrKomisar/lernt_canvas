// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(50, 50, 400, 400)

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgba(0, 0, 200, 0.8)";
      ctx.fillRect (150, 150, 150, 150);
    };
    

    
}