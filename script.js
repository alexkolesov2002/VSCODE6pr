var buttonL = document.getElementById("ArrowP");
var buttonR = document.getElementById("ArrowN");
var bi = document.getElementById("HED");
var bh = document.getElementById("H1CenterHeaderText");
var bb = document.getElementById("PCenterHeaderText");
var krug1 = document.getElementById("Krug1");
var krug2 = document.getElementById("Krug2");
var krug3 = document.getElementById("Krug3");
var krug4 = document.getElementById("Krug4");
var i = 1;

buttonR.addEventListener("click", () => {
    i += 1;
    getRan();
});

buttonL.addEventListener("click", () => {
    i -= 1;
    getRan();
});

function getRan() {

    if (i > 4) {
        i = 1;
    }
    if (i < 1) {
        i = 4;
    }
    switch (i) {
        case 1:
            console.log("1");
            bi.style.background = "url(img/Back1.png)";
            bi.style.backgroundSize = "100%";
            bi.style.transition = "0.9ms";
            bi.style.backgroundRepeat = "no-repeat";
            krug1.style.background = "#FFFFFF";
            krug2.style.backgroundColor = "none";
            krug3.style.background = "none";
            krug4.style.background = "none";

            break;
        case 2:
            console.log("2");
            bi.style.background = "url(img/rok.jpg)";
            bi.style.backgroundSize = "100%";
            bi.style.transition = "0.9ms";
            bi.style.backgroundRepeat = "no-repeat";
            krug1.style.background = "none";
            krug2.style.backgroundColor = "#FFFFFF";
            krug3.style.background = "none";
            krug4.style.background = "none";

            break;
        case 3:
            console.log("3");
            bi.style.background = "url(img/rok2.jpg)";
            bi.style.backgroundSize = "100%";
            bi.style.backgroundRepeat = "no-repeat";
            bi.style.transition = "0.9ms";
            krug1.style.background = "none";
            krug2.style.background = "none";
            krug3.style.backgroundColor = "#FFFFFF";
            krug4.style.background = "none";
            break;
        case 4:
            console.log("4");
            bi.style.background = "url(img/Back4.png)";
            bi.style.backgroundSize = "100%";
            bi.style.backgroundRepeat = "no-repeat";
            bi.style.transition = "0.9ms";
            krug1.style.background = "none";
            krug2.style.background = "none";
            krug3.style.background = "none";
            krug4.style.backgroundColor = "#FFFFFF";

            break;
        default:
            console.log("check");
            break;

    }

}