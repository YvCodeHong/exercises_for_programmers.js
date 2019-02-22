// Write a simple program to compute the tax on an order amount
// 1. What is the order amount?
// 2. What is the state? WI
// 3. The subtotal is $10.00
// 4. The tax is $0.55
// 5  The total is $10.55
// If the state is "WI", then the order must be charged 5.5% tax
// Program should display the subtotal, tax, and total for Wisconsin residents
// but display just the total for non-residents

function taxCalculator() {
    var amount = prompt("What is the order amount?");
    var state = prompt("What is the state?");
    var tax = (5.5/100) * 10
    if(state == "WI") {
        amount + tax
    } else {
        amount
    }
}
