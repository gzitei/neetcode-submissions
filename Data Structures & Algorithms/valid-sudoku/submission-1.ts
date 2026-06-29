class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const positionsMap: Map<string, Set<string>> = new Map();
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === ".") continue
                const quadrant = this.getSubBox(row, col)
                if (!positionsMap.has(quadrant)) positionsMap.set(quadrant, new Set())
                if (!positionsMap.has(`row${row}`)) positionsMap.set(`row${row}`, new Set())
                if (!positionsMap.has(`col${col}`)) positionsMap.set(`col${col}`, new Set())
                const sets = [positionsMap.get(`row${row}`),
                    positionsMap.get(`col${col}`),
                    positionsMap.get(quadrant)
                ]

                for (let set of sets) {
                    if (set.has(board[row][col])) return false
                    set.add(board[row][col])
                }
            }
        }
        return true
    }

    private getSubBox(row: number, col: number): string {
        if (row < 3) {
            if (col < 3) {
                return "q1"
            } else if (col < 6) {
                return "q2"
            } else {
                return "q3"
            }
        } else if (row < 6) {
            if (col < 3) {
                return "q4"
            } else if (col < 6) {
                return "q5"
            } else {
                return "q6"
            }
        } else {
            if (col < 3) {
                return "q7"
            } else if (col < 6) {
                return "q8"
            } else {
                return "q9"
            }
        }
    }
}
