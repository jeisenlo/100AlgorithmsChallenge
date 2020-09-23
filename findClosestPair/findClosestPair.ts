function findClosestPair(numbers: number[], sum: number): number {
   let closestPairDifference: number = -1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {

            if (numbers[i] + numbers[j] === sum) {
                const currentDifference: number = Math.abs(i - j);
                closestPairDifference = (closestPairDifference === -1 || currentDifference < closestPairDifference) ? currentDifference : closestPairDifference;
            }

        }
    }

   return closestPairDifference;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));