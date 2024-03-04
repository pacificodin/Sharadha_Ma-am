let btn=document.createElement("button");
btn.innerHTML="click me";

let bdy=document.querySelector("body");

bdy.appendChild(btn);

btn.addEventListener("click",function(){
    this.style.backgroundColor= "blue";
    console.log("nhi hua");
})


// bdy.addEventListener("mouseout",function(){
//     // it is used for assign the courser out of the child element 
//     alert("you pickout your mouse.");
// });

// btn.addEventListener("keypress",function(){
//     // its used for the character value pressed
//     alert("you press the key");
// });

bdy.addEventListener("scroll",function(){
    // it is used for assign the courser out of the child element 
    alert("you are scrolling.");
    this.style.backgroundColor="green";
});

let inp=document.createElement("input");
bdy.appendChild(inp);

let h2=document.createElement("h2");
h2.innerHTML="here the value of your input";

bdy.appendChild(h2);
inp.addEventListener("input", function() {
    // Directly reflect the input's current value
    h2.innerText = this.value;
});


inp.addEventListener("keydown", function(event) {
    if (event.key === 'Backspace') {
        // Prevent the default backspace action to manually handle the input update
        event.preventDefault();

        // Delete the previous character from the input value
        this.value = this.value.substring(0, this.value.length - 1);
    }
    // Update the display after the backspace operation or any other key press
    h2.innerText = this.value;
});

