var userData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {

        res.json(userData);

    });

    app.post("/api/friends", function(req, res) {

        if (userData.length < 5) {
            userData.push(req.body);
            res.json(true);
        } else {
            userData.push(req.body);
            res.json(false);
        }

    });

  app.post("/api/clear", function() {

    userData = [];

    console.log(userData);

  });
};
