var userData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {

        res.json(userData);

    });

    app.post("/api/friends", function(req, res) {

        var userSurvey = req.body;
        var userScores = userSurvey.scores;

        var maxDifference = 50;
        var matchName;
        var matchPhoto;

        for (i = 0; i < userData.length; i++) {

            var scoreDifference = 0;
            
            for (j = 0; j < userScores.length; j++) {
                scoreDifference += Math.abs(userData[i].scores[j] - userScores[j]);
            }

            if (scoreDifference < maxDifference) {
                maxDifference = scoreDifference;
                matchName = userData[i].name;
                matchPhoto = userData[i].photo;
                console.log("\nMatch Name = " + matchName + "\nScore Difference = " + scoreDifference);
            }
        }

        userData.push(req.body);

        res.json({
            matchName: matchName,
            matchPhoto: matchPhoto
        });

    });

};
