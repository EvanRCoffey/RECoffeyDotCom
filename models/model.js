module.exports = function(app) {
	//Feel free to add more complements
	var complementBank = ["I like your shoes","I love your outfit","Your hair looks great today","You smell wonderful","You are an inspiration","You look like a winner","You're just the best","You're so clever","Seriously, you're awesome","You are truly an impressive person","Keep up the good work, champ","You should be proud of yourself","Tone it down some, you're making everyone else look bad","Nice butt","Have you been working out?"];

	//Returns a random complement from complementBank[]
	function randomComplement() {
		var randomNum = Math.floor(Math.random() * complementBank.length);
		return complementBank[randomNum];
	}
}