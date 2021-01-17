/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    nums1.concat(nums2);
    var newSorted = (nums1.concat(nums2)).sort(function(a,b){return a - b});
    console.log(newSorted)
    if ((newSorted.length % 2) == 1) {
        var medlengthvalue = Math.floor(newSorted.length / 2);
        return newSorted[medlengthvalue].toFixed(5);
    } else {
        var medlengthvalue = Math.floor(newSorted.length / 2);
        console.log(medlengthvalue)
        return ((newSorted[medlengthvalue-1] + newSorted[medlengthvalue]) / 2).toFixed(5);
    }
};