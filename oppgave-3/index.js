const firkant = document.querySelector("#firkant");


let i = 0;
function flyttOgRoterFirkant() {
    firkant.style.left = i + "px";
    firkant.style.transform = `rotate(${i + "deg"})`;
    i += 7;
    if (i < 1320) {
        requestAnimationFrame(flyttOgRoterFirkant);
    }
}

function byttFarge () {
    i ++;
    if (i > 50) {
        requestAnimationFrame(byttFarge);
    }
}

let border = 0;
function endreBorderRadius () {
    firkant.style.borderRadius = border + "%";
    border++;
    requestAnimationFrame(endreBorderRadius);
}

function endreFirkant () {
    flyttOgRoterFirkant();
    byttFarge();
    endreBorderRadius();
}


endreFirkant();