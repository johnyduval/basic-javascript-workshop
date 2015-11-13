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

// Creating a function that take string and number and returns the string as many times as number parameter

function repeat (string, number){
	
	for(var i = number; i > 0; i--){
		return string;
	};
};

repeat("Montreal", 5);
repeat("Canada", 10);

// Created a function that reverses the letter compotion of the string it takes

function reverse (string){
	for(var i = string.length; i >=  0; i--){
		return string[i];
	}	
};

reverse("Hello");
reverse("");
reverse("Javasript");


// A function that returns the factorial of a number

function factorial (number){
        
    if (number !== 0 && number !== 1){
                return (number * factorial(number-1));
        } else {
                return 1;
        }
}

factorial(10);
