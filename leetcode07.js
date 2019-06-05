/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
        x=x.toString();
    if(x[x.length-1]==0&&x.length==1){
        return parseInt(x);
    }else  if(x[x.length-1]==0){
        x=x.substr(0,x.length-1);
    }
    if(x[0]=='-'){
   x=x[0]+ x.substr(1,x.length-1).split('').reverse().join('');    
    }
    else{
          x=x.split('').reverse().join('');    
  
    }
    x=parseInt( x);
   if(x>2147483647||x<-2147483648){
        return 0;
    }else{
    return x
    }
    
};