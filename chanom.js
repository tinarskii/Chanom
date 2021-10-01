const getRandomInt = (m) => {
	var randomOut = Math.floor(Math.random() * m) + 1;
	return randomOut;
};

var handsome;
handsome = getRandomInt(1);
console.log("Chanom is only handsome : " + handsome + "& of Me!");