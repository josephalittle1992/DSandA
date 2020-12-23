var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) return i;
    }
    return nums.length;
};
    

const test = [1, 5, 6, 9];
const target = 10;

console.log(searchInsert(test, target));