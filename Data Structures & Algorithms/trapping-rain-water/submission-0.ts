class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (height.length === 0) return 0
        let res = 0
        for (let i = 0; i < height.length; i++) {
            let [left, current, right] = new Array(3).fill(height[i])

            for (let j = 0; j < i; j++) {
                left = height[j] > left ? height[j] : left
            }
            for (let j = i+1; j < height.length; j++) {
                right = height[j] > right ? height[j] : right
            }
            res += (left < right ? left : right) - current
        }
        return res
    }
}
