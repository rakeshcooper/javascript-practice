// console.log("Start")
// setTimeout(() => console.log("This is asynchronous process"), 6000)
// console.log("End")

//promise
/*const promise = new Promise((resolve, reject) => {
    let fileloaded = false;
    if(fileloaded){
        resolve("File is loaded")
    }
    else{
        reject('File not loaded')
    }
});
promise.then( value => console.log(value))
       .catch(value => console.log(value)); 

const wait = time => new Promise((resolve) => {
    let fileloaded = true;
    setTimeout(resolve,time)
});
wait(2000).then(() => console.log("Thanks for waiting"))       



async function loadfile(){
    let fileloaded = true;
    if(fileloaded){
        return "File is loaded"
    }
    else{
        throw 'File not loaded'
    }
}

loadfile().then(value => console.log(value))
          .catch(value => console.log(value))



async function loadfile(){
    let fileloaded = false;
    if(fileloaded){
        return "File is loaded"
    }
    else{
        throw 'File not loaded'
    }
}

async function startprocess(){
    try{
        let message = await loadfile();
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

startprocess()


const userLeft = false
const userWatching = false

function promising(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name:"userleft",
                message:"no-user is rejected"
            })
        }
        else if(userWatching){
            reject({
                name:"userWatching",
                message:"no-user is watching"
            })
        }
        else{
            resolve("no problem")
        }
    })
}

promising().then(messsage => console.log(messsage))
           .catch(error => console.log(error.name+" "+error.message))
*/

function MakeRequest(location){
    return new Promise((resolve, reject) => {
        console.log('You entered '+location)     
        console.log('Making Request')   
        if(location === 'google'){
            resolve('Hi this from google yahh')
        }else{
            reject('We can only talk with google')
        }
    })
}

function ProcessRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing Request')
        resolve('Extra information processed to '+response)    
        })
}

async function DoWork(){
   try{
    const response = await MakeRequest("google");
    console.log('Response received')
    const processrequest = await ProcessRequest(response)
    console.log(processrequest) 
   }catch(error){
    console.log(error)
   }

}

DoWork()