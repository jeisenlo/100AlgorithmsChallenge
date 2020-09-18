function companyBotStrategy(trainingData: number[][]): string {
	let answerTime = 0;
	let countOfCorrect = 0;

	for (let i = 0; i < trainingData.length; i++) {
        // If the answer is correct
		if (trainingData[i][1] === 1) {
			answerTime += trainingData[i][0];
			countOfCorrect++;
		}
	}

	// toFixed() method converts a number into a string, rounding to a specified number of decimals.
	return countOfCorrect > 0
		? (answerTime / countOfCorrect).toFixed(1)
        : (0).toFixed(1);
    // return answerTime / countOfCorrect || 0; // --> If the decimal is not important
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
