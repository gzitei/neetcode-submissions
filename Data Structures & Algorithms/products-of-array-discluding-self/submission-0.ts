class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length).fill(1)
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue
                result[i] *= nums[j]
            }
        }
        return result
    }
}
