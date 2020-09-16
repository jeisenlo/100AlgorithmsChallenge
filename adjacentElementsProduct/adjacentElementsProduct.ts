function adjacentElementsProduct(inputArray: number[]): number {
    /* 
        instantiate the largestProduct to the result of multiplying the first 
        and second position of the array and not zero because we can have
        products < 0
    */
    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length-1; i++) {
        const product = inputArray[i] * inputArray[i+1];
        // if (product > largestProduct) {
        //     largestProduct = product;
        // }
        largestProduct = (product > largestProduct) ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));