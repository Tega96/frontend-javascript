# TypeScript
### Installing Typescript
      npm install typescript
 
### Initializing TypeScript with tsconfig.js
      tsc --init
 
 
 
## Basic Types
  ### Primitive - string, number and boolean //always use lowercase when writing.
      let student: string = 'John' - Type annotation to explicily state the type
 
 
  ###  Arrays - syntax below specify the array of numbers
      const array_name: number[] = [1, 2, 3]
  
 
  ###  Any - Used whenever you don't want a particular value to cause typecheck error
      eg: let obj: any = {x: 0};
      none of these will throw error: obj.foo(); obj.bar = 100; obj = 'hello'; const n: number = obj;
 
 
  ###  Functions - you can add type annotation to after each parameter to declear what type of parameter the function accept
      eg: function greet(name: string) {
              console.log("Hello, "+ name.toUpperCase() + '!!'); 
          } // Argument to the above parameter will be checked.  eg: greet(43) throws an error.
      You can also add return type annotation, which appear after the parameter list:
      eg: function getNumber(): number {
              return 26;
          } 
      Function which returns Promises - you should use promise type to annotate the return type of a function which returns a promise
      eg: async function getFavouriteNumber(): Promise<number> {
                 return 25;
          }
 
 
 ### Object Types - to define the object types, simply list it's properties and their types
      eg: function printCoord(pt: {x: number; y: number}) {
              console.log("The coordinate's x value is " + pt.x);
              console.log("The coordinate's y value is " + pt.y);
          }
          printCoord({x: 3, y: 7})
- Add a ? to specify that a property is optional
      eg: function printName(obj: {first: string; last?: string}) {
              // obj.last is probably undefined. You can use obj.last?
          }
      printName({first: "Bob"})
      printName({first: "Bob", last: "Alison"}) //Both are ok.
      
 
  ### Union types - a type formed from two or more other types, representing values that may be any one of thoes types.
      eg: function printId(id: number | string) {
              console.log("Your ID is "+ id);
          } accepts string ("112") or number(112) arguments
    * Here, you can only use methods that is valid for all union members.
 
 
  ###  Type Aliases
      eg: type Point = {
              x: number;
              y: number;
          }
          function printCoord(pt: Point) {
              console.log("The coordinate of x is " pt.x);
              console.log("The coordinate of y is " pt.y);
          }
          printCoord({ x: 100, y: 115 })
      * You can use aliase for union type
      eg: type ID = string | number;
 
 
  ### Interface - another way to name an object type:
      eg: interface Point {
              x: number;
              y: number;
          }
          function printCoord(pt: Point) {
              console.log("The coordinate of x is " pt.x);
              console.log("The coordinate of y is " pt.y);
          }
          printCoord({ x: 100, y: 115 })
- Interface is extensible as opposed to type
          interface Animal {
              name: string;
          }
          interface Bear extends Animal {
              honey: boolean;
          }
          const bear = getBear();
          bear.name;
          bear.honey;
 
  ### Type Assertions - used to specify a more specific type. Type assertions are removed by compliers, and wont affect the runtime behaviour of the code
      eg: const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
      You can also use angle bracket
      eg: const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
 
  ### Literal Types
      eg: let name = "John"
          let name2: "John" = "John"  // value cannot be changed. 


## Defining Types

-  Object with infered type.
const user = {
    name: "Hayes",
    id: 0,
}

- Declear types using interface -- can also be used on classes
interface User {
    name: string;
    id: number;
}

- explicitly describe object shape using an interface declearation.
const user1: User = {
    name: "Hayes",
    id: 0,
}