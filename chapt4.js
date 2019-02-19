// Create a simple mad-lib program that prompts for a noun,
//a verb, an adverb, and an adjective and injects those into a
// story that you create.

function madlab() {
    var noun  = prompt("Enter a noun?");
    var verb = prompt("Enter a verb");
    var adjective = prompt("Enter an adjective");
    var adverb = prompt("Enter an adverb");
    alert ( "Do you" + ' ' + verb + ' ' + ' '+ "your" + ' ' + adjective + ' ' + noun + adverb + "?" + "That is hilarious!");
};

console.log(madlab());
