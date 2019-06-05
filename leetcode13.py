class Solution:
    def romanToInt(self, s: str) -> int:
        dict={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        str=s[::-1]
        sum=dict[str[0]];
        for index in range(1,len(str)):
            if(dict[str[index]]<dict[str[index-1]]):
                sum=sum-dict[str[index]]
            else: 
               sum=sum+dict[str[index]]
        return sum
        