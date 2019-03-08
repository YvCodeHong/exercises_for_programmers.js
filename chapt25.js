
//Create a program that determines the complexity of a given a password based on these rules. 
//A very weak password contains only numbers and is fewer than eight characters. 
// A weak password contains only letters and is fewer than eight characters. 
// A strong password contains letters and at least one number and is at least eight characters. 
// A very strong password contains letters, numbers, and special characters and is at least characters. 

const passwordStrength = () => {
    const password = prompt("Please enter your passsword");
    const alphExp = /^[0-9a-zA-Z]+$/;
    if (password.isNan <= 8) {
        alert("The password" + ' ' + password + ' ' + "is a very weak password");
    } else if (password.length <= 8) {
        alert("The password" + ' ' + "is a weak password");
    //change alphexp- need to find out how to write letters and at least one number 
    } else if(password.value.alphExp) {
        alert("The password" + ' ' + "is a strong password");
    } else {
        alert("The password" + ' ' + "is a very strong password");
    }
};


