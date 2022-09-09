
/* 
Write a sum function that takes any number of arguments:

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;
Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

*/

function sumArg() {
    
    let sum = 0;
    
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// console.log(sumArg(1,2,3));

function sumDot(...args) {
    return args.reduce(function (acc, num) {
        return acc + num;
    })
  }
  
  // console.log(sumDot(1,2,3));

  class Cat {
      constructor(name) {
        this.name = name;
      }
    
      says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
      }
    }
    
    class Dog {
      constructor(name) {
        this.name = name;
      }
    }
    
    const markov = new Cat("Markov");
    const pavlov = new Dog("Pavlov");
    


Function.prototype.myBind = function (ctx) {
  // debugger
    const that = this;
    let bindArgs = Array.prototype.slice.call(arguments, 1); //
    // let bindArgs = arguments[1] // no no

    return function() {
      // debugger
        let callArgs = Array.prototype.slice.call(arguments)    
        return that.apply(ctx, bindArgs.concat(callArgs));
    }
}

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true
  
 // no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true
