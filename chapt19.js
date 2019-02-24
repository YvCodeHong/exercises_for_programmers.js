//Create a program to calculate the body mass index (BMI) for a 
//person using the person's height in inches and weight for pounds 
// The program should prompt the user for weight and height.
// Calculate the BMI by using the following formula

const bmiCalculator = () => {
    const weight = prompt("What is your weight?");
    const height = prompt("What is your height?");
    const bmi = (weight / (height * height)) * 703
    alert("Your BMI is" + ' ' + bmi.toFixed(1) / bmi);
    if(bmi <= 18.5) {
        alert("You are within the ideal weight range")}
    else if (bmi >= 25) {
        alert("You are overweight. You should see your doctor")
    }
}












