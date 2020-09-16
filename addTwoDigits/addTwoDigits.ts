function addTwoDigits(n: number): number {
    // convert the number into a string
    // split takes each character in the string and puts it into an array element
    let numbersArray = n.toString().split('');
    console.log(numbersArray);

    return parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
}

function addAnyDigits(n: number): number {
	let sum = 0;
	// convert the number into a string
	// split takes each character in the string and puts it into an array element
	let numbersArray = n.toString().split("");
	console.log(numbersArray);

	// loop over the array and sum up the values
	// must to parseInt to convert the string to a number
	numbersArray.forEach((number) => {
		sum += parseInt(number, 10);
	});

	return sum;
}

console.log(addTwoDigits(29));
console.log(addAnyDigits(3944));