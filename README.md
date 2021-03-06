# Friend Finder

Friend Finder is a compatibility-based application. Using Node and Express Servers, this full-stack site takes in results from user surveys and compares the answers with those from other users. Upon completion of the survey, the app displays the name and picture of the user with the best overall match.

#### Overview:
* __Each user's most compatible friend is determined by:__
    * Converting each user's results into a simple array of numbers _(ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1])_.
    * Question by question, the difference between current user's scores are compared against those from other users.
    * The closest compatibility match is the user with the least amount of difference.
    * Once the app determines the current user's most compatible friend, it displays the result as a modal pop-up, which includes both the name and picture of the closest match.

* __This app utilizes:__
    * __Express__ _(for handle routing)_
    * __Heroku__ _(for deployment)_

* __How to Install and Run:__
    * `git clone https://github.com/aolaleye/friend-finder.git`
    * `cd friend-finder`
    * `npm i`
    * `node server.js`

#### > Deployed Site: https://murmuring-lowlands-21511.herokuapp.com/
