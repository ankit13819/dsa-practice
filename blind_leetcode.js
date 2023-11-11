console.log("blind leetcode problem");

// var nameBlind = function twoSum(arr, N, target) {
//   let obj = {};
//   for (let i = 0; i < N; i++) {
//     //     for (let j = i + 1; j < N; j++) {
//     //       if (arr[i] + arr[j] == target) {
//     //         console.log(i, j);
//     //       }
//     //     }
//     console.log(obj.hasOwnProperty(arr[i]));
//   }
// };

//Time Complexity-o(n*2)

var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      console.log([obj[nums[i]], i]);
    } else {
      console.log((obj[target - nums[i]] = i));
    }
  }
};
let nums = [2, 7, 11, 15];
let target = 13;
twoSum(nums, target);
