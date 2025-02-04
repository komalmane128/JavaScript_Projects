// let promise= new Promise((resolve,reject )=>{
//     console.log("I am a promise");

//     reject("Some error");
// });


function getData(dataID, getNextData){

    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            console.log("Data =",dataID);
            resolve("Sucess");
            if(getNextData){
                getNextData();
            }
            
        },5000);
    })

    
}

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
//                     console.log("End...");
//                 });
                
//             } );
//         });
//     });
// });
