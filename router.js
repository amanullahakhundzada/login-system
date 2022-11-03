let express=require("express")
let router= express.Router();
const credential={
    email:"amanullahkhan9631@gmail.com",
    password:"123"
    // {
	// 	"Id": "1",
	// 	"Username": "john",
	// 	"Password": "1234567",
	// 	"Name": "John Smith"
	// },
	// {
	// 	"Id": "2",
	// 	"Username": "mary",
	// 	"Password": "1111111",
	// 	"Name": "Mary Kim"
	// },
	// {
	// 	"Id": "3",
	// 	"Username": "johndoe",
	// 	"Password": "222222",
	// 	"Name": "John Doe"
	// }
}

// Login user
router.post("/login",(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password){
     req.session.user=req.body.email;
     res.redirect("/route/dashboard");
    //  res.send(`Login successfully ${req.body.email}`)
    }else{
        res.end("Invalid Username")
    }
});
// route for dashboard
router.get("/dashboard",(req,res)=>{
    if(req.session.user)
    {
        res.render("dashboard",{user:req.session.user})
    }else
    {
        res.send("Unauthorized user")
    }
})
//route for logout
router.get("/logout",(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send(err)
            
        }else{
            res.render('base',{
                title:"Express",
                logout:"logout Successfully"

            })
        }
    })
})
module.exports=router;