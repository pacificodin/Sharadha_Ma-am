let express=require("express");
const bcrypt = require("bcrypt");
let app=express();
let port=1080;

// this is used for the getting the data from the post request (to convert then into readible format)
app.use(express.urlencoded({extended:true}));
// this line is used for the convert data into json above only able to convert html format
app.use(express.json());

app.listen(port,()=>{
    console.log(`port ${port} is listning :`)
})
app.get("/register",(req,res)=>{
    // as we know we get data from get request by using the req.query
    // here we take varaible name same as the input name argument then it will work
    let {user,pass}=req.query;
    // res.send("get request is working");
    res.send(`Your welcome to our clone mr ${user}\n
    Your password is ${pass}`);
})
app.post("/register", async (req,res)=>{
    // after encodede the data we can extract 
    // again veriable name should same as the input name in HTML
    let {user ,pass}=req.body;
    const hash= await bcrypt.hash(pass,10);
    // res.send("Your post request is listening");
    res.send(`hello mr ${user} look your password is ${hash}`);
})