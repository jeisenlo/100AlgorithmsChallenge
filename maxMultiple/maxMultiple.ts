function maxMultiple(divisor: number, bound: number): number  {
    let largestN: number = 1;

    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            largestN = i;
            break;
        }
    }

    return largestN;
}

function maxMultiple2(divisor: number, bound: number): number {
    let remainder = bound % divisor;

    return bound - remainder;
}

console.log(maxMultiple(3,10));

console.log(maxMultiple2(3, 10));