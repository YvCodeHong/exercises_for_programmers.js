//Convert euros to U.S dollars.
//Prompt for the amount of money in euros you have
//Prompt for the current exchange rate of the euro
//Print out the new amount in U.S dollars.

function currencyconverter() {
    var euro = prompt("How many euros are you exchanging?");
    var exchange = prompt("What is the exchange rate of the euro?");
    var amountto = euro * exchange;
    alert( euro +  "at an exchange rate of" + exchange + "is" + amountto });
};
