// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

let x = Math.floor(Math.random()*(max-min+1))+min;
document.getElementById("demo").innerHTML = x;

document.write(`Random value between ${min} and ${max} is ${x}`);
confirm("Hello")