// create a program that prompts for a quote and an author.
// Display the quotation and author as show in the example output.

//Break problem down:
// 1. Prompt for quote "What is the quote?"
// quote is stored
// 2. The author: Which author?
// 3. return : author says ".."


const printingquotes = () => {
  const username = prompt("What is the quote?");
  const author = prompt("Which author?");
  alert( author + ' '+ "says:" + ' ' + \""+username+"\"" );
};

console.log(printingquotes());


