class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return "empty_str_list"
        const str = strs.join(String.fromCharCode(10))
        let encoded = ""
        for (let i = 0; i < str.length; i++) {
            encoded += String.fromCharCode(str.charCodeAt(i) + 3)
        }
        console.log(encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === "empty_str_list") return []
        let decoded = ""
        for (let i = 0; i < str.length; i++) {
            decoded += String.fromCharCode(str.charCodeAt(i) - 3)
        }
        console.log(decoded)
        return decoded.split(String.fromCharCode(10))
    }
}
