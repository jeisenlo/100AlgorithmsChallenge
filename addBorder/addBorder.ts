function addBorder(picture: string[]): string[] {
	// create the full length wall
	// repeat() returns a string that has been repeated a desired number of times
	const wall = "*".repeat(picture[0].length + 2);

	// unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
    picture.unshift(wall);
    // push the wall into the last position of the array
    picture.push(wall);

    // looping over all but the first and last elements of the picture array
    for (let i = 1; i < picture.length - 1; i++) {
        // create a new string and concatenate the contents of the picture array item with asterisks
        picture[i] = "*".concat(picture[i], "*");
    }

	return picture;
}

console.log(addBorder(["abc", "ded"]));