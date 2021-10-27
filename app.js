const express=require("express");

const ejs=require("ejs");

const app=express();

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use(express.static("public"));


var arr=new Array;



app.post("/train",function(req,res)
{
    var n1=req.body.number;
    //console.log(n1);
    
   n1=parseInt(n1);
    if(n1>7)
    {
        res.render("abcd")
    }
    else if(80-parseInt(arr.length)<n1)
    {
        res.render("invalid",{n:(80-parseInt(arr.length))});
    }
    else{

    var k=parseInt(arr.length);

    for(var i=1;i<=n1;i++)
    {
       arr.push(k+i);
    }

    //console.log(arr);

    //res.send("the booked seats are "+(k+1)+" to "+(k+n1));

    res.render("ticket",{k1:k,n:n1});
}

   

})

app.get("/",function(req,res)
{
    res.render("index",{n:80-arr.length});
})


app.listen(3000,function(req,res)
{
    console.log("Server running on port 3000");
})