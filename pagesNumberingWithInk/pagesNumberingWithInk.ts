function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    // Loop until the numberOfDigits is < the current page's length of numbers
    while (numberOfDigits >= current.toString().length) {
        const currentPageNumLength = current.toString().length;
        // Decrement the numberOfDigits remaining by the length of the current page's digits
        numberOfDigits -= currentPageNumLength;
        // If we still have more digits left than the current page's digit length
        if (numberOfDigits >= currentPageNumLength) {
            // We completed this page and can move to the next page
            current++;
        }
    }

    return current;
}


console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));