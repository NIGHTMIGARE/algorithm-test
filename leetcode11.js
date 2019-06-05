/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * 
 *双指针解决最大矩形面积
 * js解决
 */
var maxArea = function(height) {
    let area=0;
    let i=0;
    let righti=height.length-1;
   while(i<righti)
        {
        area=Math.max(area,(righti-i)*Math.min(height[i],height[righti]));
        height[i]>height[righti]?righti--:i++;
    
      } 
    return area
    
};