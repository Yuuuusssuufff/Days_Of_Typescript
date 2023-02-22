//Bismillahi -ir-Rahman -ir-Raheem
//My Typescript Journey with Aweds
// type operator = number | string
// type of variable is infered from its value
// string declaration
let myName = "Yusuf"
// number declaration
let myNumber = 8
// boolean declaration
let myBoolean = true
// regex declaration
let myRegEx = /Yusuf/
// declaring an array of strings
let names = myName.split(" ")

// declaring array generically
let booleans:Array<boolean> = [false, true, true, false, false, false]
let letters: Array<string> = ["a", "b", "c"]

// reassigning types in an array
// letters = ["j", 1, "i",]


// typing an object
let mySelf = {
    myName: "Yusuf",
    age: 120
}

//using interface to create an instance of an object
interface favorite{
    lang:string
    year:number
    bestFriend:string
    choice:boolean
}

let myFavorite : favorite = {
    lang: "arabic",
    year: 2023,
bestFriend: "myWife",
choice: true
}

//using Record utility to define the key-value pair of an object

// const contacts: Record <string, number> = {
//     user1 : 082094839,
//     user2: 38498203,
// }

// contacts["user3"] = 098480923
console.log("hello world")