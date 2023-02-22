//Basic Function
// type any 
function addNumbers (a:number, b:number){
    return a + b;
}
// typescript doest not support the node export module
// module.exports = addNumbers
//it only support the default export


// defining the type of parameters and return type 
// Default parameter for str1 just as it is in vanilla js
export function addString (str1:string = "Yusuf", str2:string):string {
    return `${str1} ${str2}`
}

// Union Type

export const union = (opt1:string | number, opt2: string) : string => opt1 + opt2;

// Void Function: A function that does not return anything
export const printUnion = (opt1:string | number, opt2: string) : void => {console.log(union(opt1, opt2))}



// export const 
export default addNumbers