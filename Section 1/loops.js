for (let i = 0; i < 10; i++) {
    console.log(i);    
};

// program to check if a number is prime or not

let num = 17;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if(num%i == 0){
        console.log("i is not prime");
        isPrime = false;
        break;
    }
}

if (isPrime) console.log("Number is prime");

for (let i=1; i < 100; i++) {
    if(i%3 == 0){
    }
}
