const data  = [
    { id : 1, name : "umesh", age : 53, date : "1969-09-29"},
    { id : 2, name : "Ramya", age : 38, date : "1983-08-11"},
    { id : 3, name : "Pradyumna", age : 21, date : "1999-12-03"},
    { id : 4, name : "Prajnya", age : 21,  date : "1999-12-03"},
    { id : 5, name : "Nischita", age : 11,  date : "1999-9-02"},
]

// let keys = ["id", "name", "age"];

// let obj={};


// keys.forEach(key =>{
//     obj[key]= ""
// })

// console.log(obj)
let d= "1999-12-03"
let s= "1999-12-02"
let dif = new Date(d)- new Date(s)
console.log(dif/(1000*60*60))


