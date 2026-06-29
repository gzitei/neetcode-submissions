class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const positionsMap: Map<string, Set<string>> = new Map()
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const val = board[row][col]
                if (val === '.') continue
                const quadrant = this.getSubBox(row, col)
                if (!positionsMap.has(quadrant)) positionsMap.set(quadrant, new Set())
                if (!positionsMap.has(`row${row}`))
                    positionsMap.set(`row${row}`, new Set())
                if (!positionsMap.has(`col${col}`))
                    positionsMap.set(`col${col}`, new Set())
                const rowSet = positionsMap.get(`row${row}`)
                const colSet = positionsMap.get(`col${col}`)
                const quadrantSet = positionsMap.get(quadrant)
                if (rowSet.has(val)) {
                    return false
                } else {
                    rowSet.add(val)
                }
                if (colSet.has(val)) {
                    return false
                } else {
                    colSet.add(val)
                }
                if (quadrantSet.has(val)) {
                    return false
                } else {
                    quadrantSet.add(val)
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
