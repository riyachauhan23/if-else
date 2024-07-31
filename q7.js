/*Write a program to take a year from the user and output whether a given year is a leap year or not.
*/


const input=require("readline-sync")
let y=input.questionInt("enter the number")

if(y%100!==0){
    if(y%4==0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}
else if(y%400==0){
    console.log("yes")
}
else{
    console.log("no")
}
