/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const maxN=2147483647;
    const minN= -2147483648
	let num = /\W*-?\d*/g.exec(str)
   if(!isNaN(num))
       {
           if(Number(num)>maxN){
               return maxN
           }
           if(Number(num<minN)){
               return minN
           }
           return Number(num)
       }
  else {
      return 0;
  }
    
   
};