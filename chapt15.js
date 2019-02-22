// Simple program that validates user login credentials.
// 1.The program must prompt the user for a username and password.
// e.g: What is the password?
// 2. The program should compare the password given by the user to a known password.
// e.g: What is the password?
//If password matches,the program should display "Welcome!"

const passwordValidation = () => {
    const username = prompt("What is the username?");
    const password = prompt("what is the password?");
    const confirmPassword = "abc$123";
    // if(password != confirmPassword) {
    // alert("I don't know!")}
    //   else {
    //   alert("Welcome")
    //   }
    password === confirmPassword ? alert("Welcome"): alert("I don't know!")
};
