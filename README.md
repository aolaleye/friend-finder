# Friend Finder 
__ Using Node and Express Servers__

#### Friend Finder is a compatibility-based application. This full-stack site takes in results from user surveys and compares their answers with those from other users. Upon completion of the survey, the app displays the name and picture of the user with the best overall match.

#### Each user's most compatible friend is determined by:
* Converting each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
* Question by question, the difference between current user's scores are compared against those from other users.
* The closest compatibility match is the user with the least amount of difference.
* Once the app determines the current user's most compatible friend, it displays the result as a modal pop-up, which includes both the name and picture of the closest match.

#### This app utilizes:
* __Express__ _(for handle routing)_
* __Heroku__ _(for deployment)_

