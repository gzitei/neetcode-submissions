class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res = []
        nums.sort((a, b) => a - b)

        nums.forEach((a, i) => {
            if (!(i > 0 && a === nums[i - 1])) {
                let [l, r] = [i + 1, nums.length - 1]
                while (l < r) {
                    let threeSum = a + nums[l] + nums[r]
                    if (threeSum > 0) {
                        r--
                    } else if (threeSum < 0) {
                        l++
                    } else {
                        res.push([a, nums[l], nums[r]])
                        l++
                        while (nums[l] === nums[l - 1] && l < r) {
                            l++
                        }
                    }
                }
            }
        })
        return res
    }
}
