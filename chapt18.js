// Create a program that converts temperatures from Fahrenheit to Celsius 
// Or from Celsius to Fahrenheit 
// Prompt for the start temperature 
// The program should prompt for the type of converson and then perform the conversion. 

function cToF(celsius)
{
    const cTemp = celsius; 
    const cToFahr = cTemp * 9 / 5 + 32;
    const message = '${cTemp}\xB0C is {cToFahr} \xB0F.';
    console.log(message) 
}

function fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;
    const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
}
 
const temperatureConverter = () => {
    const temp = prompt("What is the temperature?");
    p
}



 




