const getRandomNum = (m: number) => {
	var randomOut = Math.floor(Math.random() * m) + 1;
	return randomOut;
};

var handsome;
handsome = getRandomNum(1);
console.log("Chanom is only handsome : " + handsome + "& of Me!");