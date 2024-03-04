
let btn=document.querySelector("#btn");

btn.addEventListener("click", function () {
    let h2=document.querySelector("h2");
    let di=document.querySelector("#div");
    let getrandom=randomcolor();
    h2.innerText = getrandom;
    di.style.backgroundColor =getrandom;
    console.log("color has been changed");
});


function randomcolor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255 );
    let blue=Math.floor(Math.random() * 255 );

    let color= `rgb(${red},${green},${blue})`;
    return color;

}