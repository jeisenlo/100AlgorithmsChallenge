function composeRanges(nums: number[]): string[] {
    const result: string[] = [];
    let currentRange: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // if this isn't the last number in the nums array
        // AND, the current number plus 1 is equal to the next number
        if (i !== nums.length - 1 
            && nums[i] + 1 === nums[i + 1]) {
            currentRange.push(nums[i]);
        } else {
            // insert this number
            currentRange.push(nums[i]);
            // if the currentRange has more than 1 number
            if (currentRange.length > 1) {
                result.push(currentRange[0] + "->" + currentRange[currentRange.length - 1]);
            } else {
                // the currentRange will have only 1 number
                result.push(currentRange[0].toString());
            }
            // clear the range since this range is only 1 number
            currentRange = [];
        }
    }

    return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));