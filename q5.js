/*Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
*/


const input = require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c = input.questionInt("enter the number")

if(a>b){
    l=a
    s=b
}
else{
    l=b
    s=a
}
if(l>c){
    l1=l
    s1=c
}
else{
    l1=c
    s1=l
}
if(l>l1){
    console.log(l)
}
else{
    console.log(l1)
}