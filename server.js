const express=require("express")
const path=require("path")
const bodyparser=require("body-parser")
const session =require("express-session")
const {v4:uuidv4} =require("uuid")
const router=require("./router")

const app=express();

const PORT=process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")
// load static assets
app.use("/static",express.static(path.join(__dirname,'public')))
app.use("/static",express.static(path.join(__dirname,"public/assets")))
app.use(session({
    secret:uuidv4(), //"1bbjb333b-4bjb-4bj-njnn5-nkjnj5-jnjjbvvvh" will generate such key
    resave:false,
    saveUninitialized:true
   }))

app.use("/route",router) 
//home route
app.get("/",(req,res)=>{res.render("base",{itle:"Login System"})})
app.listen(PORT,()=>{console.log(`app is running at http://localhost:${PORT}`);})