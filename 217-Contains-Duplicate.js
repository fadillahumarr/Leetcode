//#1

//https://leetcode.com/problems/contains-duplicate/
//https://fadillahumarr.notion.site/217-Contains-Duplicate-b74f3c06537c47abb3432d40b9ed28cd?pvs=4

const containsDuplicaten = (nums) => {
  let numSet = {};
  for (let num of nums) {
    if (numSet[num]) {
      return true;
    } else {
      numSet[num] = true;
    }
  }
  return false;
};

//Correct answer but time complexity is bad (O(n^2))

// const containsDuplicaten = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

console.log(containsDuplicaten([1, 2, 3, 4]));
console.log(containsDuplicaten([1, 2, 3, 1]));
console.log(containsDuplicaten([1, 2, 3, 3, 4]));
console.log(containsDuplicaten([1, 2, 5, 3, 4]));
console.log(containsDuplicaten([1, 2, 5, 3, 4, 1]));
