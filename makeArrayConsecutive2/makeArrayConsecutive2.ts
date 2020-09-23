function makeArrayConsecutive2(statues: number[]): number {
    const sortedStatues: number[] = statues.sort((a, b) => a - b);
    const smallestStatue: number = sortedStatues[0];
    const largestStatue: number = sortedStatues[sortedStatues.length - 1];
    let missingStatuesCount: number = 0;

    for (let i = smallestStatue; i <= largestStatue; i++) {
        if (sortedStatues.includes(i)) {
            missingStatuesCount++;
        }
    }

    return missingStatuesCount;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));