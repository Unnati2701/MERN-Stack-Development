const nums = [4,8,29,35,252,395];

for(let i = 0; i < nums.length; i++) {
    console.log(nums[i] **2);
}

//n represents the element of the array 
for(let n of nums) {
    console.log(n ** 2);
}

// map is used to create a new array with modifications
const res = nums.map( (n) => { return n**2 } );
console.log(res);

prices = [2345, 2388, 9993, 7500, 23567];
console.log(prices.map( (n) => { return n * 0.1}));

//filter 
const res1=nums.filter( (a) => { return a%2==0 });
console.log(res1);

//use filter : new array with elements less than 10000, greater than 5000
const res2=prices.filter( (a) => { return a<10000 && a>5000 });
// const res2=prices.filter( a => a<10000 && a>5000 ); //another syntax of filter if there is one condition and one parameter
console.log(res2);
