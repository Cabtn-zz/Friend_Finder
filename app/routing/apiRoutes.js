const path = require('path');
const{compareUsers, compArrays, yourMatch, users} = require('../data/friends.js');
console.log('WE ARE IN HERE');



const apiRoutes = (app, express) => {
    console.log('this is working');
    app.get(express.static("../public"));

    app.get("/api/users", function(req, res){
        //DEFINE THIS SHIT
        return res.json(users)
    });
    app.post("/api/new", function(req, res){
        var newUser = req.body;
        users.push(newUser);
        console.log(users)
        return res.json(newUser);
    })
}

module.exports = apiRoutes