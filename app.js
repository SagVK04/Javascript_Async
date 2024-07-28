//async await >> promise chains >> callback hell


console.log("one");
console.log("two");



setTimeout(() => {
    console.log("hello3")
}, 12000);

console.log("three");
console.log("four");


/*callback*/
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
sumCallback(a,b);
}

calculator(7, 8,sum);

const hello = ()=>{
    console.log("hello");
}

setTimeout(hello,10000);


function getData(dataId,getNextData){
    setTimeout(()=>{    
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    },2000)
}

getData(1,() =>{
    console.log("Getting data 2....");
    getData(2,() =>{
    console.log("Getting data 3....");
        getData(3);
    });
});

/*Promises(To reduce callback hell)*/
let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("Sorry for error!");
})
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("New promise");
        //resolve("123");
        reject("Not true");
    })
}
let promise1 = getPromise();
promise1.then((res)=>{
    console.log("Fullfilled!",res)
})
promise1.catch((error)=>{
    console.log("Not Fullfilled!",error)
})
function getData1(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    
            console.log("data",dataId);
            resolve("Success!")
            reject("Error!")
            if(getNextData){
                getNextData();
            }
        },2000)
    })
}