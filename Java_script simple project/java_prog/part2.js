// let num = prompt("enter number:");
// if(num%10 == 0){
//     console.log("this is good no.");
// }else{
//     console.log("this is bad no.");
// }


// let name = prompt("enter your name:");
// let age = prompt("enter you age");
// alert(name+" is" +" "+age+" "+"years old.");



// let quater = prompt("enter your no of quater:");
// switch(quater){
//     case "1":{
//         console.log("1st quater january,february,march");
//         break;
//     }
//     case "2":{
//         console.log("2nd quater april,may,june");
//         break;
//     }
//     case "3":{
//         console.log("3rd quater july,august,september");
//         break;
//     }
//     case "4":{
//         console.log("4th quater october,november,december");
//         break;
//     }
//     default:
//         console.log("wrong input");
// }

// let str=prompt("enter you string:");

// if ((str.length>5)&&(str[0]=="a" || str[0]=="A")){
//     console.log("this is golden string.");

// }else{
//     console.log("this is not golden string.");
// }



// let one=prompt("enter first no:");
// let two=prompt("enter second no:");
// let three=prompt("enter third no:");

// if(one>two ){
//     if (one>three){
//         console.log('first is big:',one);
//     }else{
//         console.log("third is big:",three);
//     }
// }else{
//     console.log("second is big.",two);
// }


// average of array
// let arr=[2,3,5,7,8];
// let n=5;
// const arrayavg=(arr,n)=>{
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+arr[i];
//     }
//     return sum/n;
// }


// const Even=(n)=>{
//     if(n%2==0){
//         return "Even";
//     }
//     else{
//         return "odd";
//     }
// }




// let length=4;
// function callback(){
//     console.log(this.length);
// }
// const object={
//     length: 5,
//     method(callback){
//         callback();
//     },
// };



const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};


setTimeout(object.logMessage,1000);