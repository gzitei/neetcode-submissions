class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length < 2) return s.length
        let max = 0
        const map = new Map<string, number>()
        let start = 0
        for (let i = 0; i < s.length; i++) {
            const char = s[i]
            if (map.has(char)) {
                const idx = map.get(char)
                if (idx >= start) start = idx + 1
            }
            map.set(char, i)
            const size = i + 1 - start
            if (size > max) {
                max = size
            }
        }
        return max
    }
}
