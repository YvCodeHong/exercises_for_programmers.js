//Create a small program that contains a list of employee names. e.g.: employee = ["Yvonne Tang", "Micheal Lee"]
// Print out the list of names when the program runs the first time. 
// Prompt for an employee name and remove that specific name from the list of names. 
// Display the remaining employees, each on its own line. 

const employeeList = () => {
    const employeeList = ["Yvonne Tang", "Becky Liu", "Fatima Meah", "Jack Ma", "Pony Ma"]
    const employeeName =prompt("Enter an employee name to remove:");
    employeeList.splice();
    
};

const employeeList = ["Yvonne Tang", "Becky Liu", "Fatima Meah", "Jack Ma", "Pony Ma"]
const employeeName = prompt("Enter an employee name to remove:");
for (var i = employeeList.length - 1; i--;) {
    if (employeeList[i] === "b") employeeList.splice(i, 1);
};





