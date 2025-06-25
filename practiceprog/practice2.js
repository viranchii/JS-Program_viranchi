//Question 1

/*let age =  prompt("Enter Your age:");
if(age>10 && age<20){
 document.write("your age lies between 10 and 20");
}else{
 document.write("your age doesnt lies between 10 and 20");
}*/

let num =  prompt("Enter Number:");
num = Number.parseInt(num);
if(num % 2 == 0 && num % 3 == 0){
    alert("Your number is divisible by 2 and 3");
}else{
    alert("Your number is not divisible by 2 and 3");
}