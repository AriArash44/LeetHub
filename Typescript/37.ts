function solveSudoku(board: string[][]): void {
    function isValid(r: number, c: number, ch: string) {
        for (let k = 0; k < 9; k++) {
            if (board[r][k] === ch || board[k][c] === ch) return false;
        }
        const br = Math.floor(r / 3) * 3;
        const bc = Math.floor(c / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[br + i][bc + j] === ch) return false;
            }
        }
        return true;
    }
    function backtrack(): boolean {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== ".") continue;
                for (let ch = 1; ch <= 9; ch++) {
                    const s = ch.toString();
                    if (isValid(i, j, s)) {
                        board[i][j] = s;
                        if (backtrack()) return true;
                        board[i][j] = ".";
                    }
                }
                return false;
            }
        }
        return true;
    }
    backtrack();
}