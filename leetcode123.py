class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        firbuy=-9999
        firsell=0
        secbuy=-9999
        secsell=0
        for index in range(0,len(prices)):
            firbuy=max(firbuy ,-prices[index])
            firsell=max(firsell,firbuy+prices[index])
            secbuy=max(secbuy ,firsell-prices[index])
            secsell=max(secsell,secbuy+prices[index])
        return secsell
         