let max=prompt("Enter the highest limitation no:");
let random=(Math.random()*max)+1;
let guess=prompt("Guess the no between them:");
while(true){
    if(random==guess){
        console.log(`congracts! the no was ${max}`);
        break;
    }
    else if(guess>random){
        console.log("you are bigger then no.");
    }
    else if(guess<random){
        console.log("you are smaller then no.");
    }
    else{
        console.log("enter valid");
    }
    guess=prompt("Guess again:");
}