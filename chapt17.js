// Create a program that prompts for your weight, gender, number of drinks, 
// the amount of alcohol by volume of the drinks consumed. 
// the amount of time since your last drink. 
// Calculate your blood alcohol content(BAC) using this formula 

const bloodAlcohol = () => {
    const weight = prompt("What is your weight?");
    const gender = prompt("What is your gender?");
    const numberofDrinks = prompt("Amount of alcohol?");
    const amountDrinks = prompt("Hours since your last drink");
    
    if(gender === m) {
       r = 0.73 }
    else {
       r = 0.66 
        }
    } 
bac = (numberofDrinks * 5.14 / weight * r) - 0.015 * amountDrinks
    alert("Your BAC is" + bac);
    if(bac >= 0.08) {
        alert("It is not legal for you to drive")}
        else {
        alert("It is legal for you to drive")
    };

