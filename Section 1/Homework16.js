// palindrome

let num = 39857;
let temp = num;
let reverse = 0

while(num > 0){
    let r = num % 10; // get last digit
    reverse *= 10 + r;
    num = parseInt(num/10); //remove last digit
}

console.log(reverse);

if(temp == reverse){
    console.log('Palindrome');
}
else{
    console.log('Not palindrome');
}


