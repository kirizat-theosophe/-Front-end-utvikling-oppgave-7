const knapp = document.querySelector("#knapp");
const main = document.querySelector("main");

const bilde = document.createElement("img");
bilde.setAttribute("src", "./tre.jpg");

knapp.onclick = () =>  main.appendChild(bilde) 