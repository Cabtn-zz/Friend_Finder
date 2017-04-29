const path = require('path');
const{compareUsers, compArrays, yourMatch, users} = require('../data/friends.js');

const apiRoutes = (app, express) => {
    console.log('this is working');
    app.get(express.static("../public"));

    app.get("/api/users", function(req, res){
        //DEFINE THIS SHIT
        return res.json(users)
    });
    //we are not console.logging the right scores
    //This is because the scores are FUCKING STRINGS FIX THIS
    app.post("/api/new", function(req, res){
        var newUser = req.body;
        users.push(newUser);
        res.json(newUser);
        console.log(users);
        console.log("NU: " + newUser.score);
        console.log("Let's match " + newUser.name)
        compareUsers(newUser.name);
        console.log("user: " + users.score)
    })
}

module.exports = apiRoutes