const data  = [
    { id : 1, name : "umesh", age : 53},
    { id : 2, name : "Ramya", age : 38},
    { id : 3, name : "Pradyumna", age : 21},
    { id : 4, name : "Prajnya", age : 21},
    { id : 5, name : "Nischita", age : 11},
]


let keys = Object.keys(data[0])

let f = data.filter(d=>d[keys[0]]==2)
console.log(f)