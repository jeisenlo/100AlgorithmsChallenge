function containsCloseNums(nums: number[], k: number): boolean {

    // loop over the nums array
    for (let i = 0; i < nums.length; i++) {
        // loop over nums array again for comparison
        for (let j = 0; j < nums.length; j++) {
            // if the values in the array are the same
            // AND, i and j are NOT equal
            // AND, the absolute value of i - j === k
            if (i !== j && nums[i] === nums[j] 
                && Math.abs(i - j) <= k) {
                return true;
            }

        }

    }

    return false;

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));