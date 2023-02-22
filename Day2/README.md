# Function Overloading in Typescript
Function overloading is the process of using a function or method in multiple ways and same name with different paramater types and return types

## How to use function/method overloading
The syntax to create a function overloading is as expressed below:

 * function function_name(parameter1 : data_type, parameter2: data_type) : function_return_type;

In the above syntax, different functions could be having different parameters of different data types, but  constraint here is that the parameters count should be the same in each and every overloaded function, and the name of each and every overloaded functions should be the same.
 

## Using the unknown type
Unknown is a sibling type to any, if any is about saying "I know what's best", then unknown is a way to say "I'm not sure what is best, so you need to tell TS the type" example:unknown-and-never

##  using optional parameter