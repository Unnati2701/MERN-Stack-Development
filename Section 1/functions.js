function checkEven(n) {
    var msg = 'Function scope'; //var is used specifically for function and its scope is limited to function, if msg is called outside the function :error
    if (n %2 ==0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}

checkEven(457);
// console.log(msg);

const getAvg = function(n1,n2,n3){
    const avg = (n1+n2+n3)/3;

    console.log(avg);
}

getAvg(43,786, 236);

// create a func to print the fibonacci series

const fibonacci = function(num){
    let [a,b] = [0,1]; //destuructred array
    console.log(0);
    console.log(1);

    while(true){
        const c = a+b;
        if(c > num) break;
        console.log(c);
        [a,b] = [b,c]; //swaping array

    }
};
 
fibonacci(50);

console.log('\n---------------Arrow function-----------------');
//Arrow function - es6

const addNums = (a,b) => {
    let c = a+b;
    // console.log(c);
    return c;
}

const res = addNums(45,67);
console.log(res);