/*Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
*/


const input=require("readline-sync")
let u=input.questionInt("enter the number")

if(u<=50){
    a=u*0.5
    sc=a*20/100
    bill=a+sc
}
else if(u<=150){
    a=50*0.5
    q=u-50*0.75
    a=p+q
    sc=a*20/100
    bill=a+sc
}
else if(u<=250){
    p=50*0.5
    q=100*0.75
    r=(u-150)*1.2
    a=p+q+r
    sc=a*20/100
    bill=a+sc
}
else{
    p=50*0.5
    q=100*1.2
    r=100*1.2
    s=(u-250)*1.5
    a=p+q+r+s
    sc=a*20/100
    bill=a+sc
}
console.log(bill)