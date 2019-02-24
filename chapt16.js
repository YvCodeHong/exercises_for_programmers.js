// 1. Write a program that asks the user for their age and compare it to the legal 
// driving age of sixteen. e.g "What is your age?"

// 2. User is 16 or older, then the program should display "You are old enough to legally drive"
// 3. User is under 16, the program should display "You are not old enough to legally drive"

const drivingAge = () => {
    const age = prompt("What is your age?");
    const confirmdrivingAge = 16 
    // if( age < 16 ) {
    //     alert("You are not old enough to legally drive")}
    //     else {
    //     alert("You are old enough to legally drive")
    //     }
    age < 16 ? alert("You are not old enough to legally drive"): alert("You are old enough to legally drive")
    };

    

