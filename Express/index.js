// first step npm init to create json file
// 2nd step install express by command npm install express
// third step make index.html to make live sever
// how to work check on npm site to search express
const express=require("express");
// above reuire is basicaly return a function and we store that into a app variable

const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`your current port no is ${port}`);
});
// request recieved conformation 
// app.use((req,res)=>{
//     console.log("requrest recieved");
//     res.send("hello bro we have done");
// });
// this is used for the send request
// we can not use the get as well as use together for same request

// here we learning the routing -> mean go to other page inside the same server
app.get('/',(req,res)=>{
    res.send("<h1>hello bro we have done</h1>");
});

app.get('/home',(req,res)=>{
    console.log(res.params);
    res.send("you are inside the home server");
});
app.get('/help',(req,res)=>{
    res.send("May i help you \n Please ask questions");
});

app.post('/',(req,res)=>{
    res.send("you send a post request");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`<h1>Your request for the @${username} will be resolved</h1>`);
});
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send(`<h1>NOT ANY Query Passes<h1>`);
    }
    res.send(`<h1>Your Search query is:${q}</h1>`);
});

app.get("*",(req,res)=>{
    // this * is used for if above routes is not mathched with the user request then it will execute
    res.send("Your router port is not right");
});






