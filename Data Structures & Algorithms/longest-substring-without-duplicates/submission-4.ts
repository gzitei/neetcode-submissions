class Solution {
    lengthOfLongestSubstring(s: string): number {
        let maxLen = 0;
        let left = 0;
        const charSet = new Set<string>();

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            // Shrink window from the left until the duplicate is removed
            while (charSet.has(ch)) {
                charSet.delete(s[left]);
                left++;
            }

            // Now the window has no duplicate of ch
            charSet.add(ch);
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}