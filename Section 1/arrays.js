const nums = ['war', 'pathan', 'thor','flash','iceage','k3g'];

console.log(typeof nums);
console.log(nums.length);

// adds new element at the beginning of the array
nums.push('ddlj');

console.log( nums );

// adds new element at the beginning of the array
nums.unshift('3 idiots');
console.log( ...nums );

// removes the element from the array and only prints new element at the end temporarily, does not add new element
console.log(...nums, 'spiderverse');

//removes the last element from the array
nums.pop();
console.log(nums);

//removes the first element from the array
nums.shift();
console.log(nums);

//indexing
console.log(nums[3]);
console.log(nums.at(-2));

//slicing
console.log(nums.slice(1,4));

//removing element from specific index
nums.splice(3,2);
// nums.splice(3,2, 'batman', 'toy story');

console.log(nums);
