
// create arrays to track scores
const todayScore = [];
let counter = 0;
// let todayScores = document.createElement('h2');


// setup dynamic date for API link
let currentDate = '2019-DEC-05';
let apiKey = '?key=1f959b854295403da6bf0ef8c33ff5f9';
let apiLink = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/${currentDate}${apiKey}`;

// fetch the API scores from link
// const fetch = require("node-fetch");
fetch(apiLink)

// convert API data into jSON
.then(response => response.json())

// parse data and push into scores arrays
.then(data => {
  // console.log(data)
  for (let i = 0; i < data.length; i++) {
		if (data[i].AwayTeamScore === null) data[i].AwayTeamScore = 0;
		if (data[i].HomeTeamScore === null) data[i].HomeTeamScore = 0;
    todayScore.push([`${data[i].AwayTeam}: ${data[i].AwayTeamScore}  at  ${data[i].HomeTeam}: ${data[i].HomeTeamScore}`]);
  }
  // console.log(todayScore);
})

.then(() => {
	for (let el of todayScore){
		if (counter < todayScore.length){
			// todayScores.innerHTML = `Scores: ${el}`
			let newTag = document.createElement('p');
			newTag.innerHTML = `${el}`;
			document.body.appendChild(newTag)
		}
	}
	return
	

})

// log error if exists
.catch(err => {
  console.log(err);
});
