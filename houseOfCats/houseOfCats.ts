function houseOfCats(legs: number): number[] {
	let peopleAndCats = [];

	if (legs === 2) {
		return [1];
	}

	while (legs >= 0) {
		/*
            unshift() method adds one or more elements to the beginning 
            of an array and returns the new length of the array.
        */
		peopleAndCats.unshift(legs / 2);
		// Decrement number of legs by 4
		legs -= 4;
	}

	return peopleAndCats;
}

console.log(houseOfCats(32));
console.log(houseOfCats(6));
console.log(houseOfCats(4));
console.log(houseOfCats(2));
