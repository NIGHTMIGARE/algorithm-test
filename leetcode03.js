var lengthOfLongestSubstring = function(s) {
  function hashTable()
{
    var size = 0;
    var entry = new Object();

    this.add = function (key , value)
    {
        if(!this.containsKey(key))
        {
            size ++ ;
        }
        entry[key] = value;
    }

    this.getValue = function (key)
    {
        return this.containsKey(key) ? entry[key] : null;
    }
     this.setValue = function (key,value)
    {
        entry[key]=value;
    }

    
    this.containsKey = function ( key )
    {
        return (key in entry);
    }


  
}
var hash= new hashTable();
let maxl=0;
for(let i=0,j=0; j<s.length;j++)
    {
        hash.containsKey(s[j])&& ( i = Math.max(hash.getValue(s[j]),i));  //重复子串,缩小左边界           
         maxl = Math.max(maxl,j-i+1);
        hash.add(s[j],j+1);
      
    }
    return maxl; 
};