const input=require("readline-sync")
let n=input.questionInt("enter the number")

let k;

if(n>0){
    if(n%2==0){
        console.log(n);
    }
    else{
        k=n*2;
        console.log(k);
    }
}

