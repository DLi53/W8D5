function curriedSum(numArgs) {
    let numbers = [];
    
    function _curriedSum (number) {
        numbers.push(number);

        if (numbers.length === numArgs) {
            // let sum = 0;
            // for (let i=0; i < numbers.length; i++ ) {
            //     sum+= numbers[i];
            // }
            // return sum

            // let result = numbers.reduce((acc, number) =>  acc + number );
            // console.log(result)

            return numbers.reduce(function(acc, number) {
                return acc + number;
            });
            // console.log(result)

        } else {
            
            return _curriedSum;
        }   
    }
    // debugger
    return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
// sum(5)(30)(20)(1)



Function.prototype.curry = function (numArgs) {
    let args = []
    let that = this
    function _curriedNums (number) {
        args.push(number)
        if (args.length === numArgs) {
            debugger
            return that.apply(null, args)
        } else {
            return _curriedNums;
        }
    }
    return _curriedNums;
}



function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3);
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30
