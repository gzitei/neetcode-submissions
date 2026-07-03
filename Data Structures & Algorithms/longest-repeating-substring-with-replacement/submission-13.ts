class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counter: Map<string, number> = new Map()
        let left: number = 0
        let maxSize: number = 0
        let mostFrequent = 0
        for (let i = 0; i < s.length; i++) {
            counter.set(s.charAt(i), (counter.get(s.charAt(i)) ?? 0) + 1)
            mostFrequent = counter.get(s.charAt(i)) > mostFrequent ? counter.get(s.charAt(i)) : mostFrequent
            while (i - left + 1 - mostFrequent > k) {
                counter.set(s[left], counter.get(s[left]) - 1)
                left++
            }
            maxSize = (i - left + 1) > maxSize ? (i - left + 1) : maxSize
        }
        return maxSize
    }
}
