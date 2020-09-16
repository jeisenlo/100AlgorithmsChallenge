function areSimilar(a: number[], b: number[]): boolean {
    const c: number[] = [];
    let d: number[] = [];
	// if the arrays are identical then return true
    /* 
        every() method tests whether all elements in the array pass the test 
        implemented by the provided function. It returns a Boolean value.
    */
    if (a.every((val, index) => val === b[index])) {
		return true;
    }
    /*
    OR 
    if (a.toString() === b.toString()) {
        return true;
    }
    */

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            // push the unequal numbers into arrays for comparison
            c.push(a[i]); 
            d.push(b[i]);
        }
        if (c.length > 2) {
            // no need to keep looping if there are more than 2 differences
            break;
        }
    }

    // reverse the order (swap the numbers)
    d = d.reverse();

    // if there has only been one pair swapped and the arrays have equal values
    if (c.length === 2 && (c.toString() === d.toString())) {
        return true;
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
