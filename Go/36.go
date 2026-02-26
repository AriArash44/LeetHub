package leetcode

var rowMapSeen = make([]map[byte]bool, 9)
var colMapSeen = make([]map[byte]bool, 9)
var boxMapSeen = make([]map[byte]bool, 9)

func initMaps() {
	for i := 0; i < 9; i++ {
		rowMapSeen[i] = make(map[byte]bool)
		colMapSeen[i] = make(map[byte]bool)
		boxMapSeen[i] = make(map[byte]bool)
	}
}

const dot = 46

func isValidSudoku(board [][]byte) bool {
	initMaps()
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			if board[i][j] == dot {
				continue
			}
			if rowMapSeen[i][board[i][j]] || colMapSeen[j][board[i][j]] || boxMapSeen[(i/3)*3+(j/3)][board[i][j]] {
				return false
			}
			rowMapSeen[i][board[i][j]] = true
			colMapSeen[j][board[i][j]] = true
			boxMapSeen[(i/3)*3+(j/3)][board[i][j]] = true
		}
	}
	return true
}
