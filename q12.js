/*Write a program to take 8 numbers from the user and output the second max of these 8 numbers. (do this in 9 comparision)
*/


const input=require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c = input.questionInt("enter the number")
let d = input.questionInt("enter the number")
let e = input.questionInt("enter the number")
let f = input.questionInt("enter the number")
let g = input.questionInt("enter the number")
let h = input.questionInt("enter the number")

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
if(e>f){
    l2=e
    s2=f
}
else{
    l2=f
    s2=e

}
if(g>h){
    l3=g
    s3=h
}
else{
    l3=h
    s3=g
}
if(l>l1){
    l4=l
    s4=l1
}
else{
    l4=l1
    s4=l
}
if(l2>l3){
    l5=l2
    s5=l3
}
else{
    l5=l3
    s5=l2
}
if(s>s1){
    l6=s
    s6=s1
}
else{
    l6=s1
    s6=s
}
if(s2>s3){
    l7=s2
    s7=s3
}
else{
    l7=s3
    s7=s2
}
if(l6>l7){
    console.log(l6);
}
else{
    console.log(l7);
}