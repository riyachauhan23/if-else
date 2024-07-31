/*Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).
*/


const input=require("readline-sync")
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number")
let c=input.questionInt("enter the number")
let d=input.questionInt("enter the number")

if(a>b){
    l=a
    s=b
}
else{
    l=b
    s=a
}
if(c>d){
    l1=c
    s1=d
}
else{
    l1=d
    s1=c
}
if(l>l1){
    console.log(l)
}
else{
    console.log(l1)
}