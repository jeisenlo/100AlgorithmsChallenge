function isLucky(n: number): boolean {
	const numberArray: string[] = n.toString().split("");
    const midPointIndex: number = numberArray.length / 2;
    let sumFirstHalf: number = 0;
    let sumSecondHalf: number = 0;

	for (let i = 0; i < numberArray.length; i++) {
        if (i < midPointIndex) {
            sumFirstHalf += parseInt(numberArray[i]);
        }
        if (i >= midPointIndex) {
            sumSecondHalf += parseInt(numberArray[i]);
        }
    }

    return sumFirstHalf === sumSecondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));