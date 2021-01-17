/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output = [];
    for(var i = 0;i<nums.length;i++){
        for(var j=i;j<nums.length;j++){
            if((nums[i]+nums[j]) === target && i!=j){
                output.push(i);
                output.push(j);
                break;
            }
        }
    }
    return output;
};