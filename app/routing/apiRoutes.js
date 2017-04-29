const path = require('path');
const{compareUsers, compArrays, yourMatch, users} = require('../data/friends.js');

const apiRoutes = (app, express) => {
    console.log('this is working');
    app.get(express.static("../public"));

    app.get("/api/users", function(req, res){
        return res.json(users)
    });
    app.post("/api/new", function(req, res){
        var newUser = req.body;
        users.push(newUser);
        compareUsers(newUser.name);
        res.send(compareUsers(newUser.name));
    })
}

module.exports = apiRoutes