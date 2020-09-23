function firstDuplicate(a: number[]): number {
    let dups = {};

    for (let num of a) {
        /* 
            If the object already has this number as a property,
            then it is the duplicate with the lowest index
        */
        if (dups.hasOwnProperty(num)) {
            return num;
        }
        // Create the new object property for this number
        dups[num] = num;
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
