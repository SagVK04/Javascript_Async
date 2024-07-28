function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Return 1");
            resolve("Success!");
        },4000);
    });
}

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Return 2");
            resolve("Also a Success!");
        },4000);
    });
}
/*Promise Chaining
console.log("Fetching data 1....");
asyncFunc().then(()=>{
    console.log("Now Fetching data 2....");
    return asyncFunc1();
})
.then(()=>{});
*/

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}
console.log("Getting data 1....");
getData(1).then((res)=>{
    console.log("Getting data 2....");
    return getData(2);
}).then((res)=>{
    console.log("Getting data 3....");
    return getData(3);
}).then((res)=>{
    console.log(res);
});