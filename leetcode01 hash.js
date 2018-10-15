/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 **/
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

    this.remove = function ( key )
    {
        if( this.containsKey(key) && ( delete entry[key] ) )
        {
            size --;
        }
    }

    this.containsKey = function ( key )
    {
        return (key in entry);
    }

    this.containsValue = function ( value )
    {
        for(var prop in entry)
        {
            if(entry[prop] == value)
            {
                return true;
            }
        }
        return false;
    }

    this.getValues = function ()
    {
        var values = new Array();
        for(var prop in entry)
        {
            values.push(entry[prop]);
        }
        return values;
    }

    this.getKeys = function ()
    {
        var keys = new Array();
        for(var prop in entry)
        {
            keys.push(prop);
        }
        return keys;
    }

    this.getSize = function ()
    {
        return size;
    }

    this.clear = function ()
    {
        size = 0;
        entry = new Object();
    }
}

var twoSum = function(nums, target) {
    var result=[];
    var test=new hashTable();
    // var i=0;
   nums.forEach(function(item,index){
           
      // console.log("success" +index);
       if(test.containsKey(target-item)&&item==(target-item)){
            result.push(test.getValue(target-item),index);
         test.remove(target-item);
         //  console.log("same");
       }     
      else {
            test.add(item,index);
             if(test.containsKey(target-item)&&index!==test.getValue(target-item)){
                    // result.push([test[item],test[target-item]]);
                     result.push(test.getValue(target-item),test.getValue(item));
                    test.remove(item);
                    test.remove(target-item);
               //    console.log("delete");
                }
                    }
       });
    return result;       
};