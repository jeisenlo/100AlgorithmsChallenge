function chunkyMonkey(arr: any[], size: number): any[][] {
	let result: any[] = [];
	/*
        slice() method returns a shallow copy of a portion 
        of an array into a new array object selected from 
        start to end (end not included) where start and end 
        represent the index of items in that array. The 
        original array will not be modified.
    */
	for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

	return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));