// Defining Coordinate object
interface Coordinate {
  x: number;
  y: number;
}
// Function that Create the coordinate from object
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return obj;
}

// Function that Create the coordinate from number
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return { x, y };
}

// 
function parseCoordinate(str:string):Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };


  // Conditional Types
  // Using conditionals to define the overloaded function from different input parameter type 

  //If the argument is of string type
  if (typeof arg1 === "string") {
    (arg1).split(",").forEach(str => {
        const [key, value] = str.split(":")
        coord[key as 'x' | 'y'] = parseFloat(value)
    })
        }
        //If the argument is of object type
  else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } 
  //If the argument is of number type
  else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
// testing the overloaded function with different parameter
console.log(parseCoordinate(10, 30))
console.log(parseCoordinate({x:43, y:8}))
console.log(parseCoordinate("x:21,y:45"))