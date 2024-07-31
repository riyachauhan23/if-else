/*Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
*/


const input=require("readline-sync")
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number")
let c=input.questionInt("enter the number")
let d=input.questionInt("enter the number")

if(a>b){
    l=b
    s=a
}
else{
    l=a
    s=b
}
if(c>d){
    l1=d
    s1=c
}
else{
    l1=c
    s1=d
}
if(s>s1){
    l2=s1
    s2=s
}
else{
    l2=s
    s2=s1
}
if(l2>s2){
    console.log(s2)
}
else{
    console.log(l2)
}