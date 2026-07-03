class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counter: Map<string, number> = new Map()
        let left: number = 0
        let right: number = 0
        let maxSize: number = 0
        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i)
            const charCount = counter.get(char) ?? 0
            counter.set(char, charCount + 1)
            const mostFrequent = [...counter.values()].reduce((a, b) => Math.max(a, b))
            right = i
            while (right - left + 1 - mostFrequent > k) {
                const leftMostChar = s[left]
                const leftMostCharCount = counter.get(leftMostChar)
                counter.set(leftMostChar, leftMostCharCount - 1)
                left++
            }
            const size = right - left + 1
            maxSize = size > maxSize ? size : maxSize
        }
        return maxSize
    }

    isValidWindow(length: number, lessFrequentCount: number, k: number): boolean {
        return length - lessFrequentCount <= k
    }
}
