class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if(len(prices)<1):
            return 0;
        buy=-prices[0]
        sell=0
        for index in  range(1,len(prices)):
            buy=max(-prices[index],buy)
            sell=max(prices[index]+buy,sell);
        return sell













