function electionsWinners(votes: number[], k: number): number {
	let possibleWinners: number = 0;
	// let maxCurrentVotes: number = 0;

	// Find the current max votes
	// for (let i = 0; i < votes.length; i++) {
	//     if (votes[i] > maxCurrentVotes) {
	//         maxCurrentVotes = votes[i];
	//     }
	// }
	// const maxCurrentVotes: number = votes.reduce((a, b) => (a > b) ? a : b);
    // Could also sort votes array and grab the last element
    /*
    const sortedVotes: number[] = votes.sort((a, b) => a > b);
    const maxCurrentVotes: number = votes[votes.length - 1];
    */
    /*
        Math.max() function returns the largest of the zero or more numbers given as input parameters.
    */
	const maxCurrentVotes: number = Math.max(...votes);

	// Find out how many candidates can still win election
	for (let i = 0; i < votes.length; i++) {
		if (votes[i] + k > maxCurrentVotes) {
			possibleWinners++;
		}
	}

	return possibleWinners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));