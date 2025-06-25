// async function hello() {
//     console.log("Hello World");
// }

/*function api(){
    return new Promise((resolve,reject) =>{
           setTimeout(() =>{
            console.log("Weather Data");
            resolve("Success");
           },2000);
    });
}

async function getData(){
    await api();//1st
    await api();//2nd
}*/

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data", dataId);
        resolve("success");
      }, 2000);
    });
  }

  //Async-await
 /* async function getalldata(){
    await getData(1);
    await getData(2);
  }*/

  (async function (){
    await getData(1);
    await getData(2);
  })();

  

  //callback hell: diffcult to understand
/*getData(1,() =>{  
    console.log("getting data2");             
    getData(2,() =>{
        console.log("getting data3");    
        getData(3);
    });
});*/

//promise chain
/*getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });*/