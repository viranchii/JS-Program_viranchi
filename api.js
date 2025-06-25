const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () =>{
    console.log("getting data....");
    let response = await fetch(URL); //taking time so use await
    console.log(response);//JSON format readeble foemat me
    let data = await response.json();
    //console.log(data);
    //console.log(data[0].text);
    factpara.innerText = data[1].text;
};


//promise chain
/*function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factpara.innerText = data[1].text;
    });
}*/

btn.addEventListener("click", getFacts);
