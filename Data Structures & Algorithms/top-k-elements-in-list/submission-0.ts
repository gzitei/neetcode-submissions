class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const seen: { [key: number]: number } = {}

        for (let i = 0; i < nums.length; i++) {
            if (!seen.hasOwnProperty(nums[i])) seen[nums[i]] = 0
            seen[nums[i]] += 1
        }

        return Object.keys(seen).sort((a, b) => seen[b] - seen[a]).slice(0, k).map(n => Number(n))
    }
}