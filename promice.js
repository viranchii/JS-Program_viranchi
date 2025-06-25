/*console.log("One");
console.log("Two");
 
setTimeout(() =>{
    console.log("hello")
},4000);

console.log("Three");
console.log("Four");*/

//promise chain
/*function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        },4000);
    });
}


console.log("getting data1.....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("getting data2.....");
    let p2 = asyncFunc2();
     p2.then((res) => {
    console.log(res);
})
})*/

/*console.log("getting data2.....");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
})*/

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

//promise chain
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    console.log(res);
  });
