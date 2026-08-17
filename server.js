const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("Frontend"));
app.use(express.json());
var users=[
    {
        "id":1,
        "name":"Robert Downey Jr @ Iron Man",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10WIyFH95auL8jchdYvS63KrePL8PNZICjolsjDMMtA&s=10"
    },
    {
        "id":2,
        "name":"Chris Evans @ Captain America",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWSiVkqqi5v9Q8p6yFtQw9sw94pat68EOmnr9Am9pGA&s=10"
    },
    {
        "id":3,
        "name":"Chris Hemsworth @ Thor",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAiIfJgQBTZKwcKVyYAreCaO_IEV-VDeBVxALTvbntw&s=10"
    },
    {
        "id":4,
        "name":"Mark Ruffalo @ Hulk",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEBiVhlep7KrSgGJ4znBN0-l3DWK_Q4FjyiXySaR7gw&s=10",
    },

    {
        "id":5,
        "name":"Scarlett Johansson @ Black Widow",
        "gender":"Female",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy0b-7l_dVCEJzbXWpVc3_I9eoSe3s8oQ3whqUuvGvA&s=10",
    },

    {
        "id":6,
        "name":"Brie Larson @ Captain Marvel",
        "gender":"Female",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1ZRJUht8seZ-m6NAXzbFh76A72KYNTcVSyICCBlhvQ&s=10",
    },

    {
        "id":7,
        "name":"Chadwick Boseman @ Black Panther ",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJulLvv8kHIChwcPNhOfoLJsdTtzc7Z7GZPAlr4We98Y-yyKM4hr1hPnY&s=10",
    },

    {
        "id":8,
        "name":"Benedict Cumberbatch @ Doctor Strange",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGedxMZhdljGrnIMiFRhoTPZZHuGl80NdVGuUyjMpVmQ&s=10",
    },
    {
        "id":9,
        "name":"Josh Brolin @ Thanos",
        "gender":"Male",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRW-iGXp0z2aueJMT1Q9ZVHf27-Po-wFtSKxCWXagFQ&s=10",
    },
    {
        "id":10,
        "name":"Thomas William Hiddleston @ Loki",
        "gender":"Female",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrg5ir8oDM6B0zp2mKHV-HiBCILMrSTpXbAKF0CbXigg&s",
    }
]
var nextId=11;
function getId(id){
    for(var i=0;i<users.length;i++){
        if(users[i].id===id){
            return i;
        }
    }
    return -1;
}
app.get("/api/users",function(req,res){
    return res.json(users);
});
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=getId(id);
    if(index===-1){
        return res.status(404).json({"error":"User Not Found"});
    }
    return res.json(users[index]);
});
app.get("/api/random-user",function(req,res){
    if (users.length===0){
        return res.status(404).json({"error":"No Users Available"});
    }
    var randomIndex=Math.floor(Math.random()*users.length);
    return res.json(users[randomIndex]);
});
app.post("/api/users",function(req,res){
    var newUser=req.body;
    var tempUser={
        "id":nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "image":newUser.image
    }
    users.push(tempUser);
    nextId++;
    return res.status(201).json(tempUser);
});


app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);
});

