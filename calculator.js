const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 

//Use body parser urleconded, post from html; extended to true allows us to post nested object. 
app.use(bodyParser.urlencoded({extended:true}));

//post request; this handles post 
app.post("/",function(req,res){
    var number_1 = Number(req.body.num1);
    var number_2 = Number(req.body.num2);

    var addition = number_1 + number_2;
    res.send("The results for Number1 and Number2 is: " + addition); 
    //console.log(req.body.num1);
    //res.send("Thanks for posting");
});

app.get("/",function(req,res){
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html"); //__dirname grab the path of the current location;
});

app.listen(3000,function(){
    console.log("Listening on port 3000");
});