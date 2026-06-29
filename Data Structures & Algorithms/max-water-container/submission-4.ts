class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0
        let [l, r] = [0, heights.length - 1]
        while (l < r) {
            const [leftHeight, rightHeight] = [heights[l], heights[r]]
            let dist = r - l
            let height = leftHeight < rightHeight ? leftHeight : rightHeight
            let area = dist * height
            maxArea = area > maxArea ? area : maxArea
            if (leftHeight < rightHeight) {
                l++
            } else {
                r--
            }
        }
        return maxArea
    }
}
