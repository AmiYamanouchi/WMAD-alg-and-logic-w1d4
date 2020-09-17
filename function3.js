// Function 3: convert hours into seconds. 
// Take in a value of hours up to 4 decimal places, and convert it into seconds. 

const hourToSecond = function(hour) {

    let second = hour * 60 * 60;
    return second.toFixed(4)

}


console.log(hourToSecond(1));