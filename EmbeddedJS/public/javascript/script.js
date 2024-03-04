let btn=document.querySelectorAll("button");
console.log("hello");


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Adding event listener to the button
for(let bt of btn){
    bt.addEventListener("click", () => {
        let body = document.querySelector("body");
        // Correct property usage for changing background color
        body.style.backgroundColor = getRandomColor();
    });
}

