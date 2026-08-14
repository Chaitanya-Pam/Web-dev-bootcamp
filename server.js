const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("Frontend"));
var users=[
    {
        "id":1,
        "name":"Surigaadu",
        "gender":"Male",
        "image":"John.png"
    },
    {
        "id":2,
        "name":"Pentamma",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/31.jpg"
    },
    {
        "id":3,
        "name":"Appalamma",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
        "id":4,
        "name":"Johny",
        "gender":"Male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id":5,
        "name":"Aandalamma",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id":6,
        "name":"lipsika",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id":7,
        "name":"jesan",
        "gender":"Male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id":8,
        "name":"valther veeraiya",
        "gender":"Male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        "id":9,
        "name":"Micheline",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        "id":10,
        "name":"Akhila",
        "gender":"Female",
        "image":"https://randomuser.me/api/portraits/women/30.jpg",
    }
]
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
app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);
});

