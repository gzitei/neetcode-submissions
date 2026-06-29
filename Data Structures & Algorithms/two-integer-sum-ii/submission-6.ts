class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        if (numbers.length === 2) return [1, 2]
        for (let i = 0; i < numbers.length; i++) {
            let complement = target - numbers[i]
            for (let j = 0; j < numbers.length; j++) {
                if (i === j) continue
                if (numbers[j] === complement) return [i+1, j+1]
            }
        }
        return []
    }
}
