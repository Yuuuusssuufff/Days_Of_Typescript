// Higher order function: taking function as a parameter and returning a function as a value
export function printToFile(text:string, callback:()=> void){
console.log(text)
callback()
}

//Taking callback as a parameter to return an array of number


// 01- Taking function as a parameter
export function formArray(numbers:number[], mutate: (v:number) => number):number[]{
    return numbers.map(mutate)
}


// 02- Creating a type function

export type functionType = (k : number) => number

export function higherFunctionType (numbers: number[], mutate: functionType) {
    return numbers.map(mutate)
}


//03- Returning function as a value
// creating a function closure

export function createFullName (firstName:string):(v:string)=> string{
    return (lastName:string) => firstName + lastName
}

 export const printName = createFullName("Yusuf")
 console.log(printName("Ajibola"))
