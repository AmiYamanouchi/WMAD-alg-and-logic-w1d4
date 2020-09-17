// Function 6: even or odd?  will take in one parameter ( a number ) 
// and print either even or odd, depending on the number. 

const numType = function(num) {

    let result = "";

    if (num % 2 === 0) {
        result = "even";
        return `This is ${result}`
    } else {
        result = "odd";
        return `This is ${result}`
    }
}

console.log(numType(3));
