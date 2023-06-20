//  objects stores data in key:value format just like dictionary or hashmap
const user = {
    name: 'Ramu',
    age: 25,
    email: 'ramu@gmail.com',
    password: '982478'
};

console.log(user.name);

console.log(user['email']); //second format to get the value of key

user.age = 30; //to change the value of the same key already present

user.address = 'Lucknow'; //to add a new key:value pair

console.log(user);

const smartphone = [
    { id : 1, name : 'iPhone 14', price : 99999, brand : 'Apple'},
    { id : 2, name : 'Galaxy S23', price : 89999, brand : 'Samsung', colors :['red','blue','black']},
    { id : 3, name : 'OnePlus 11 Pro', price : 69999, brand : 'OnePlus'},
];

console.log(smartphone[1]);
console.log(smartphone[1].price);
console.log(smartphone[1].colors[1]);

