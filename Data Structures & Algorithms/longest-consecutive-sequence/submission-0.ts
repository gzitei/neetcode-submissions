class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set = new Set<number>(... Array(nums))
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            let counter = 1
            let current = nums[i]
            while (set.has(current+1)) {
                counter += 1
                current += 1
            }
            max = Math.max(max, counter)
        }
        return max
    }
}
