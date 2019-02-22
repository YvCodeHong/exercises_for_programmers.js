// create a program that prompts for input string and displays output that shows the
// input string and the numbers of characters the string contains.

// Breaking down problem:
// 1. Prompt for a word. "Insert a string? "
// 2. User inputs: "House"
// 3. Returns: House has five characters

//ES5
function wordlength() {
  var username = prompt("Please enter a string?");
  var str = username.length;
  alert( username + "has" + ' ' + str + ' '+ "characters");
};

console.log(wordlength());

//ES6
const wordlength2 = () => {
  const username = prompt("Please enter a string?");
  const str = username.length;
  alert(`${username} has ${str} characters`)
};
