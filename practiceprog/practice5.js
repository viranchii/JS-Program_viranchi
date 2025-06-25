//problem1
/*let arr = [1,2,4,56,66,67,54]
let a = prompt("Enter a number");
a=Number.parseInt(a);
arr.push(a)
document.write(arr)*/

//problem 2
/*let arr = [1,2,4,56,66,67,54]
let a;
do 
{
    a = prompt("Enter a number");
    a=Number.parseInt(a);
    arr.push(a)
}while(a!=0);
document.write(arr) */

//problem 3
/*let arr = [1,2,30,80,99,760,66,560]
let n = arr.filter((x)=>{
   return x%10 == 0
})
document.write(n);*/

//problem 4
/*let arr = [1,2,30,80,99,760,66,560]
let n = arr.map((x)=>{
   return x*x;
})
document.write(n);*/

//problem 5
let arr = [1,2,3]
let n = arr.reduce((x1,x2)=>{
   return x1*x2;
})
document.write(n);