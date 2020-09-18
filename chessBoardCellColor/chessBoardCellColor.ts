function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
    };

    // Convert the stringified values to numbers
    // Sum up each part of a cell's coordinates
    const cell1Total = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    const cell2Total = (board[cell2[0]] + parseInt(cell2[1])) % 2;

    console.log(cell1Total);
    console.log(cell2Total);

    // Even totals mean that the board cell is dark
    // Odd totals mean that the board cell is light
    // If totals equal then they are on the same color cell
    return cell1Total === cell2Total;
    
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor("A1", "F7"));
