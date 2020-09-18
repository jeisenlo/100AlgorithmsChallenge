function commonCharacterCount(s1: string, s2: string): number {
	const s1Array = s1.split("");
	let s2Array = s2.split("");
	let count = 0;

	/*
        splice() method adds/removes items to/from an array, and returns the removed item(s).
        Note: This method changes the original array.
    */

	for (let i = 0; i < s1Array.length; i++) {
		const letterIndex = s2Array.indexOf(s1Array[i]);

		if (letterIndex > -1) {
			// Remove found character from s2Array
			s2Array.splice(letterIndex, 1);
			count++;
		}
	}

	return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount("thegreat", "thegoodeat"));