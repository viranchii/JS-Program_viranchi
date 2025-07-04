const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn =  document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for ( code in countryList ) {
//     console.log(code,countryList[code]);
// }

for(let select of dropdowns){
    for ( currCode in countryList ){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        //for USD select 
        if(select.name ==="from" && currCode ==="USD") {
            newOption.selected = "selected";
        }else if(select.name ==="to" && currCode ==="INR") {
            newOption.selected = "selected";
        }
        //
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
              updateFlag(evt.target) //target use where we change show
    })
}

//For Change Flag
const updateFlag =  (element) => {
     let currCode = element.value;
     let conturyCode = countryList[currCode];//IN,EU etc.. for short name
     let newSrc = `https://flagsapi.com/${conturyCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc;
}

btn.addEventListener("click",async (evt) =>{
    evt.preventDefault();//click button not refresh button
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    //console.log(amtVal);
    if (amtVal === "" || amtVal < 1){
       amtVal = 1;
       amount.value ="1";
    }

   // console.log(fromCurr.value,toCurr.value);   
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
if (!response.ok) {
    throw new Error("Network response was not ok");
}

let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
//console.log(rate);

let finalAmount = amtVal * rate;
msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} `;  
}); 

