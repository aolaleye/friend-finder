var userData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {

        res.json(userData);

    });

    app.post("/api/friends", function(req, res) {

        userData.push(req.body);
        res.json(true);

        var userInput = req.body;
        var userRes = userInput.scores;

        var match = "";
        var matchImg = "";
        var friendDiff = 100;

        for (i = 0; i < friends.length; i++) {
            var diff = 0;
            for (j = 0; j < userRes.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userRes[j]);
                console.log(diff);
            }
            console.log("diff = " + diff);

            if (diff < friendDiff) {
                friendDiff = diff;
                match = friends[i].name;
                matchImg = friends[i].pic;
                console.log("match diff = " + diff);
                console.log("name = " + match);
                console.log("image = " + matchImg);
            }
        }

        friends.push(userInput);

        res.json({
            matchName: match,
            matchImg: matchImg
        });

    });

    app.post("/api/clear", function() {

        userData = [];

        console.log(userData);

    });
};
