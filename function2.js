// Function 2: convert minutes into seconds. Function will take one parameter 
// that will be  a number of minutes, up to 2 decimal places. 
// Convert it into seconds, and return that number. 

const minToSecond = function(min) {

    let second = min * 60 
    return second.toFixed(2)

}

console.log(minToSecond(5))