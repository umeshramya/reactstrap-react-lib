const data  = [
    { id : 1, name : "umesh", age : 53},
    { id : 2, name : "Ramya", age : 38},
    { id : 3, name : "Pradyumna", age : 21},
    { id : 4, name : "Prajnya", age : 21},
    { id : 5, name : "Nischita", age : 11},
]

let keys = ["id", "name"];

let obj={};
let value = "pr"
let temp = data.filter(o=>{
    let oString="";
    for (const key of keys){
        oString = `${oString},${o[key]}`  
    }
    if(oString.toLowerCase().search(value.trim().toString().toLowerCase()) >= 0){
        return o;
     }


})

console.log(temp)


