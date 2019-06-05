/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isTrue=true;
    x=x.toString();
    // let x1=x.split('').reverse();
 
    for(let r=0;r<x.length/2;r++){
        if(x[r]!==x[x.length-r-1]){
            isTrue=false;
            break;
        }
    }
    return isTrue;
    
};