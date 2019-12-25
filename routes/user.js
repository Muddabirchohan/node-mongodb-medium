const express = require('express');
var user = require('../model/user');
const router = express();

router.post('/createuser',(req,res)=>{

    let users  ={
        name: 'test',
        age: 23,
        gender: 'male'
    }
    user.create(users).then(function(userdata){
        res.send(userdata)
    })

})

router.get('/test',(req,res)=>{
    res.send("test")
})

module.exports = router;