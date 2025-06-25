/*create a game where you start with any random game number.Ask the user TO keep gusseing the 
  game number until the user enter correct value 

  let gameNum=25;
  let userNum=prompt("Gusses the game Number:");

  while(userNum != gameNum){
    userNum = prompt("you entered wrong number. gusses again:");
  }
  console.log("congratulations,you entered the right number");*/

/*Question: Create a H2 heading element with text - “Hello JavaScript”Append “from Apna Collegestudents” to this text using JS

  let h2=document.querySelector("h2")

  console.dir(h2.innerText);
  h2.innerText=h2.innerText+"Wlcome to the college";*/

  let newbtn=document.createElement("button");
  newbtn.innerText="click me!!"
  console.log(newbtn);

  let div=document.querySelector("div");
  div.append(newbtn);
  //div.prepend(newbtn);
  //div.before(newbtn);
  //div.after(newbtn);