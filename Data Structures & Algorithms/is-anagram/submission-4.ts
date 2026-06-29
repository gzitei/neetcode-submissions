export default class Solution {
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const seen: { [key: string]: number } = {}

    for (let i = 0; i < s.length; i++) {
      if (seen[s[i]]) {
        seen[s[i]] += 1
      } else {
        seen[s[i]] = 1
      }
    }

    for (let j = 0; j < t.length; j++) {
      if (seen[t[j]]) {
        seen[t[j]] -= 1
        if (seen[t[j]] === 0) {
          delete seen[t[j]]
        }
      } else {
        return false
      }
    }
    return Object.keys(seen).length === 0
  }
}
