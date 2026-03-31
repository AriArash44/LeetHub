const wrongValues = new Map<string, number[]>();
const lastCellStack: [number, number, number][] = [];
let isCompleted = false;
let backtrack = false;

function analyzeBoard(board: string[][]): {
    posNums: number[][][],
    filled: boolean[][]
} {
    const posNums: number[][][] = Array.from({ length: 9 }, () =>
        Array.from({ length: 9 }, () => [])
    );
    const filled: boolean[][] = Array.from({ length: 9 }, () =>
        Array.from({ length: 9 }, () => false)
    );
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                filled[i][j] = true;
                continue;
            }
            const candidates = new Set([1,2,3,4,5,6,7,8,9]);
            for (let k = 0; k < 9; k++) {
                if (board[i][k] !== ".") candidates.delete(Number(board[i][k]));
            }
            for (let k = 0; k < 9; k++) {
                if (board[k][j] !== ".") candidates.delete(Number(board[k][j]));
            }
            const boxRow = Math.floor(i / 3) * 3;
            const boxCol = Math.floor(j / 3) * 3;
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    const val = board[boxRow + r][boxCol + c];
                    if (val !== ".") candidates.delete(Number(val));
                }
            }
            const wrong = wrongValues.get(`${i},${j}`) ?? [];
            for (let num of wrong) candidates.delete(num);
            posNums[i][j] = Array.from(candidates);
        }
    }
    return { posNums, filled };
}

function solveSudoku(board: string[][]): void {
    const { posNums, filled } = analyzeBoard(board);
    isCompleted = true;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            isCompleted &&= filled[i][j];
        }
    }
    if (isCompleted) return;
    let firstIndex: number[] = [];
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (!filled[i][j] && posNums[i][j].length === 0){
                backtrack = true;
                return;
            }
            if (!filled[i][j] && firstIndex.length === 0) firstIndex = [i,j];
        }
    }
    backtrack = false;
    const value = posNums[firstIndex[0]][firstIndex[1]][0];
    board[firstIndex[0]][firstIndex[1]] = value.toString();
    lastCellStack.push([firstIndex[0], firstIndex[1], value]);
    solveSudoku(board);
    if (backtrack){
        const lastCell = lastCellStack.pop();
        if (!lastCell) return;
        const [row, col, val] = lastCell;
        board[row][col] = ".";
        const key = `${row},${col}`;
        if (wrongValues.has(key)) {
            wrongValues.get(key)!.push(val);
        }
        else {
            wrongValues.set(key, [val]);
        }
        solveSudoku(board);
    }
}