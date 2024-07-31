/*Write a program to take a number from the user and output whether that number is negative, positive or zero.
*/

const input=require("readline-sync")
let n = input.questionInt("enter the number")
let negative,positive,zero

if(n>0){
    console.log("positive")
}
else if (n==0){
    console.log("zero")
}
else{
    console.log("negative")
}