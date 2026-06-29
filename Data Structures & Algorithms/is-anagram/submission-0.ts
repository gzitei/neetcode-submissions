class Solution {
  isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    const str1 = s.split('').sort()
    const str2 = t.split('').sort()
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) return false
    }
    return true
  }
}
