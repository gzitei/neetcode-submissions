class Solution {
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set()
        for (let num of nums) {
            if (seen.has(num)) {
                return true
            }
            seen.add(num)
        }
        return false
    }
}
