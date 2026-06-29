class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const results = new Map<string, string[]>()
        for (let i = 0; i< strs.length; i++) {
            let sorted = strs[i].split("").sort().join()
            if (results.has(sorted)) {
                results.get(sorted).push(strs[i])
            } else {
                results.set(sorted, [strs[i]])
            }
        }
        return [...results.values()]
    }
}
