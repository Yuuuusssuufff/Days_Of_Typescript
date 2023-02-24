// optional parameters
function printMyFullName(
  firstName: string,
  lastName: string,
  middleName: string
) {
  return `My name is ${firstName} ${middleName} ${lastName}`;
}

console.log(printMyFullName("Yusuf", "Ajibola", "Opeyemi"));

//if you try to call the function with a missing parameter, you get a cry from ts

// console.log(printMyFullName("Yusuf", "Ajibola"))

//Lets fix the problem passing middleName as optional parameter with ? symbol
function printFullNameWithOptionalParameter(
  firstName: string,
  lastName: string,
  middleName?: string
) {
  return `My name is ${firstName} ${middleName} ${lastName}`;
}
console.log(printFullNameWithOptionalParameter("Yusuf", "Ajibola"));

// The middleName parameter as above will return undefined
// Lets fix this by conditional return

function printNameWithOptionalParameter(
    firstName: string,
    lastName: string,
    middleName?: string
  ) {
    return `My name is ${firstName} ${middleName ? middleName : ""} ${lastName}`;
  }
  console.log(printNameWithOptionalParameter("Yusuf", "Ajibola"));
  

  //Optional Field and Call

  interface Client{
    name:string
    number: number
    email: string
    nationality?: string
   
  }
  type Callback = () => void

  function registerClient (client: Client, callback?:Callback) {
    callback?.()
    return `${client.name} from ${client.nationality ? client.nationality : "Nigeria"} is successfully register.`
  }

  console.log(registerClient({
    name: "Ahmed",
    number: 9587494,
    email: "ahmedaklj;fa@yahoo.com",
    nationality : "Morocco"   
  }
))
console.log(registerClient({
    name: "Ahmed",
    number: 9587494,
    email: "ahmedaklj;fa@yahoo.com",
     
  }
))