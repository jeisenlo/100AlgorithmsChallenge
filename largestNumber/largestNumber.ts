function largestNumber(n: number): number {
	/*
        repeat() method constructs and returns a new string which contains the 
        specified number of copies of the string on which it was called, concatenated together.
    */
	let largestNumberString: string = '9'.repeat(n);

	// for (let i = 0; i < n; i++) {
	// 	largestNumberString += "9";
	// 	// largestNumberString = largestNumberString.concat('9');
	// }

	return parseInt(largestNumberString);
}

console.log(largestNumber(2));
console.log(largestNumber(6));