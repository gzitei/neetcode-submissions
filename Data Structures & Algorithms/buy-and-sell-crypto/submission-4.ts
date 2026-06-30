class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        let buy = -1
        let sell = -1
        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i]
            let buyPrice = prices[buy] ?? Number.MAX_VALUE
            let sellPrice = prices[sell] ?? Number.MIN_VALUE
            if (currentPrice < buyPrice) {
                buy = i
                sell = i
            }
            if (i > buy) {
                if (currentPrice > sellPrice) {
                    profit = currentPrice - buyPrice > profit ? currentPrice - buyPrice : profit
                    sell = -1
                }
            }
        }
        return profit
    }
}