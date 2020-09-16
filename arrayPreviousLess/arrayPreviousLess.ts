function arrayPreviousLess(items: number[]): number[] {
    let smallestValueAray: number[] = [];

    // Loop over the array passed in
    for (let i = 0; i < items.length; i++) {
        // decrement the loop from the current position by minus 1 
        for (let j = i; j >= 0; j--) {
            // if we reach the last iteration we know there are no further numbers to check
            if (j === 0) {
                smallestValueAray.push(-1);
            } else if (items[i] > items[j - 1]) {
                smallestValueAray.push(items[j - 1]);
                break;
            }

        }

    }

    return smallestValueAray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));