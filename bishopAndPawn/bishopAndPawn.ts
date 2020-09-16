function bishopAndPawn(bishop: string, pawn: string): boolean {

	const board = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
	};

	// reference a character in string by index
	const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);

    /*
        If the bishop and pawn are in the same spot on board
        OR
        the value of the bishopX + pawnY === pawnX + bishopY
        we know the bishop can attack the pawn in one move
    */
    if (bishopX + bishopY === pawnX + pawnY 
        || bishopX + pawnY === pawnX + bishopY) {
        return true;
    }

    return false;
}

console.log(bishopAndPawn('a1', 'c3'));