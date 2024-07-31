/*Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
*/


const input=require("readline-sync")
let bs=input.questionInt("enter the number")

 let gs;
 let hra;
 let da;


if(bs<=10000){
    hra=20/100*bs
    da=80/100*bs
}
    else if (bs<=20000){
        hra=25/100*bs;
        da=90/100*bs;
    }
    else{
            hra=30/100*bs;
            da=95/100*bs;
        }
 gs=hra+da+bs;
console.log(gs)