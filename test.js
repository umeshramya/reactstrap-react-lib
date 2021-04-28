const data  = [
    { id : 1, name : "umesh", age : 53},
    { id : 2, name : "Ramya", age : 38},
    { id : 3, name : "Pradyumna", age : 21},
    { id : 4, name : "Prajnya", age : 21},
    { id : 5, name : "Nischita", age : 11},
]

let keys = ["id", "name", "age"];

let obj={};


keys.forEach(key =>{
    obj[key]= ""
})

console.log(obj)


