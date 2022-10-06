const minCanvas = document.querySelector("#minCanvas");
const ctx = minCanvas.getContext("2d");

ctx.rect(50,50,300,300);
ctx.fillStyle = "green"
ctx.strokeStyle = "darkgrey";

//Setter på kantlinje
ctx.stroke();
ctx.fill();
