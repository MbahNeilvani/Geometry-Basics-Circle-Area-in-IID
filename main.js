// This series of katas will introduce you to basics of doing geometry with computers.

//Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
//The Circle class can be seen below:

function circleArea(r){
    let pi = 3.14
    return (pi * r * r)
}

circleArea(5)

//Solution

function circleArea(circle){
    // A = π r2
    var pi = 3.141592653589793238;
    return pi * Math.pow(circle.radius,2).toFixed(6);
}

// toFixed() is the number of decimal places
// Math.pow is raise to the power
