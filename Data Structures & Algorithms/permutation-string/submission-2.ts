class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const counter: Map<string, number> = new Map()
        for (let i = 0; i < s1.length; i++) {
            counter.set(s1[i], (counter.get(s1[i]) ?? 0) + 1)
        }
        for (let i = 0; i < s2.length; i++) {
            let substr = s2.substring(i, i+s1.length)
            let s2Counter = new Map(counter)
            for (let j = 0; j < substr.length; j++) {
                const count = s2Counter.get(substr[j])
                if (count === undefined) break
                s2Counter.set(substr[j], count - 1)
            }
            if ([...s2Counter.values()].every(v => v === 0)) return true
        }
        return false
    }
}
