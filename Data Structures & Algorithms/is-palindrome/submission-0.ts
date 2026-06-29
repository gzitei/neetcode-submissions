class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (s.length <= 1) return true
        const str = s.replace(/[^a-zA-z0-9]/g, '').toLowerCase()
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
                return false
            }
        }
        return true
    }
}
