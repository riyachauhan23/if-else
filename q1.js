/*Write a program to take two numbers from the user and determine the greater of those two given numbers.
*/


// const input=require("readline-sync")
// let a=input.questionInt("enter the number")
// let b=input.questionInt("enter the number")
// if (a>b){
//     console.log(a)
// }
// else{
//     (b>a)
//     console.log(b)
// }

// let N = 100; // Change N to any positive integer

// let primeCount = 0;

// for (let i = 2; i <= N; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         primeCount++;
//     }
// }

// console.log("Number of prime numbers between 1 and", N, "is:", primeCount);





const input=require("readline-sync")
let N=input.questionInt("enter the  friend number")
let X=input.questionInt("enter the slices number")
let slicesperpizza=4;
let tottalslicesneeded=N*X;
let pizzasNeeded=0;

while(tottalslicesneeded>0){
    tottalslicesneeded -=slicesperpizza;
    pizzasNeeded = pizzasNeeded+1;
}
console.log(pizzasNeeded);


