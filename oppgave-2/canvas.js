const minCanvas = document.querySelector("#minCanvas");
const ctx = minCanvas.getContext("2d");

//Argumenter er: (x-pos, y-pos, radius, startVinkel, sluttVinkel, motKlokka);
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fillStyle = "darkblue";
ctx.fill();