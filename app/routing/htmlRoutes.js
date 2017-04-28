var path = require('path');

//export this
const htmlRoutes = (app, express) => {
    //Serving static files using express's middle-ware function. Have to use an absolute path for this. 
    app.use(express.static(path.join(__dirname, 'app/public')));

    app.get('/', (req,res) => {
        console.log('home routing');
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })

    app.get("/survey", (req, res) => {
        console.log('survey routing');
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
}

//exports.htmlRoutes = htmlRoutes;
//if I am just exporting 1 function I can go ahead and use module.exports
module.exports = htmlRoutes;
