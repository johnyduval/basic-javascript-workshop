// Creating the function returning the first character of strings

function firstCharacter (word){
	return word[0];
};

firstCharacter("mom");
firstCharacter("");
firstCharacter("DecodeMTL");

// Creating a function that returns the last character of strings

function lastCharacter (word){
	return word[word.length -1];
};

lastCharacter("mom");
lastCharacter("");
lastCharacter("DecodeMTL");

// Returning the character at the position of the number input

function numberCharacter (string, number){
	return string[number-1];
};

numberCharacter("mom", 4);
numberCharacter("", 2);
numberCharacter("DecodeMTL", 3);

// Adding numbers together

function addNumbers (n1,n2){
	return n1 + n2;
};

addNumbers(3,4);
addNumbers(10,2);

// Multiplies numbers

function multNumbers (n1, n2){
	return n1 * n2;
};

multNumbers(5,10);
multNumbers(2,3);

// Creating the function calc that will return basic calculations

function calc(number1, number2, string){
	if (string === 'add'){
		return addNumbers(number1, number2);
	} else if (string === 'substract'){
		return number1 - number2;
	} else if (string === 'mult'){
		return multNumbers(number1, number2);
	} else if (string === 'div'){
		return number1/number2;
	} else {
		return 0;
	};
};

