// Function 4: convert celsius into fahrenheit into celsius, 
// and vice versa. Function will take two parameters that will be  
// a temp either fahrenheit or celsius, up to 2 decimal places. 
// The second argument will be either the letter ‘c’ or the letter ‘f’ to state 
// whether the value given is starting in celsius or in fahrenheit. 
// Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)

const changeDegree = function(num,degree) {

    let temp = "";

    if(degree == "c") {
        temp = num * 1.8 + 32;
        return temp.toFixed(1) + "F"
    } else if ( degree == "f") {
        temp = (num - 32) / 1.8;
        return temp.toFixed(1) + "C"
    }

}

console.log(changeDegree(78,"f"));
