/*function Sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

//calculator(1,2,Sum);

calculator (1,2, (a,b) =>{
    console.log(a+b);
    
});*/

//----------------

/*function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//callback hell: diffcult to understand

getData(1,() =>{  
    console.log("getting data2");             
    getData(2,() =>{
        console.log("getting data3");    
        getData(3);
    });
});*/

/*primise chain
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });*/

//-------------------------------
//promise
const getPromise =() => {
   return new Promise((resolve,reject) => {
        console.log("I am Promise");
        // resolve(123)     
         reject("network error");
    });
};

let promise = getPromise();
promise.then((res) =>{
    console.log("Promise fullfield",res)
});
promise.catch((err) => {
    console.log("Rejected",err);
});



/*function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
        console.log("Data",dataId);
        resolve("Sucesses");
        if(getNextData){
            getNextData();
        }
    },2000);
});
}*/