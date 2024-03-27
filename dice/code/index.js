/*

-refresh new dice (random)
-Associate image(1-img1, vice versa)
*/


function dice1(){
    let rndom=Math.random();
rndom=6*rndom;
rndom=rndom+1;
rndom=Math.floor(rndom);


if (rndom===1) {
    document.querySelector("#image1").setAttribute("src","/dice//img/dice1.png")
    return rndom;
}

else if (rndom===2) {
    document.querySelector("#image1").setAttribute("src","/dice//img/dice2.png")
    return rndom;
}
else if (rndom===3) {
    document.querySelector("#image1").setAttribute("src","/dice//img/dice3.png")
    return rndom;
}
else if (rndom===4) {
    document.querySelector("#image1").setAttribute("src","/dice//img/dice4.png")
    return rndom;
}
else if (rndom===5) {
    document.querySelector("#image1").setAttribute("src","/dice//img/dice5.png")
    return rndom;
}
else{
    document.querySelector("#image1").setAttribute("src","/dice//img/dice6.png")
    return rndom;
}

}

function dice2(){
    let rndom=Math.random();
rndom=6*rndom;
rndom=rndom+1;
rndom=Math.floor(rndom);

if (rndom===1) {
    document.querySelector("#image2").setAttribute("src","/dice//img/dice1.png")
    return rndom;
}

else if (rndom===2) {
    document.querySelector("#image2").setAttribute("src","/dice//img/dice2.png")
    return rndom;
}
else if (rndom===3) {
    document.querySelector("#image2").setAttribute("src","/dice//img/dice3.png")
    return rndom;
}
else if (rndom===4) {
    document.querySelector("#image2").setAttribute("src","/dice//img/dice4.png")
    return rndom;
}
else if (rndom===5) {
    document.querySelector("#image2").setAttribute("src","/dice//img/dice5.png")
    return rndom;
}
else{
    document.querySelector("#image2").setAttribute("src","/dice//img/dice6.png")
    return rndom;
}

}

dice1();
dice2();
if (dice1()>dice2()) {
    document.getElementById("winner").textContent="PLAYER 1"
}

else if (dice1()<dice2()) {
    document.getElementById("winner").textContent="PLAYER 2"

}
else {
    document.getElementById("winner").textContent="DRAW"
}
