async function hello(){
    console.log("Hello")
}
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather");
            resolve(200);
        },2000);
    });
}
async function getWeather(){
    await api();
    await api();
}


function getData(dataId, idNumber){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    
            console.log("Getting data "+(idNumber+1)+" ....");
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}
async function getAllData(){
    for(let i=0;i<6;i++){
        await getData(i+1,i);
    }
}