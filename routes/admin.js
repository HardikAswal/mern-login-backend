var express = require('express')
var router = express.Router()

var admin = {
    username:"admin@muj",
    password:"admin@muj"
}

router.get("/",(req,res,next)=>{
    res.send("Got")
})

router.post('/login',(req,res)=>{
    console.log(req.body.username)
    console.log(req.body.password)

    if (admin.username === req.body.username && admin.password === req.body.password){
        res.status(200).send({
            message:"Successful Login"
        })
    }
    else{
        res.status(200).send({
            message:"Username or Password is incorrect."
        })
    }
});

module.exports = router;