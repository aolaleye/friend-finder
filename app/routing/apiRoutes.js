var userData = require("../data/friends");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {

        res.json(userData);

    });

    app.post("/api/friends", function(req, res) {

        var userSurvey = req.body;
        var userScores = userSurvey.scores;

        var matchName;
        var matchPhoto;
        var maxDifference = 50;

        for (i = 0; i < userData.length; i++) {
            var scoreDifference = 0;
            for (j = 0; j < userScores.length; j++) {
                scoreDifference += Math.abs(userData[i].scores[j] - userScores[j]);
            }
            console.log("scoreDifference = " + scoreDifference);

            if (scoreDifference < maxDifference) {
                maxDifference = scoreDifference;
                matchName = userData[i].name;
                matchPhoto = userData[i].photo;
                console.log("Match Name = " + matchName + "\nScore Difference = " + scoreDifference);
            }
        }

        userData.push(req.body);

        res.json({
            matchName: matchName,
            matchPhoto: matchPhoto
        });

    });

};
