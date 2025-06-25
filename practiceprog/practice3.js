let marks = {
       Khishi:90,
       Shreya:99,
       Esha:99
}
//Q 1
/*for (let i=0;i<Object.keys(marks).length;i++){
    document.write("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]+"<br>" );
}*/

//Q 2
/*for (let key in marks){
    document.write("The Marks of " + key  + " are " + marks[key]+"<br>" );
}*/

//Q 3
/*let cn =5;
let i;
while(i != cn)
{
    i = prompt("Enter Number:");
    document.write("Try again")
}
document.write("You Have Entered Correct Number")*/

//Q 4
const mean = (a,b,c,d) => {
    return(a+b+c+d)/4;
}
document.write(mean(4,5,6,7));