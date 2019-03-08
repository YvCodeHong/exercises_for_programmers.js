//Create a program that generates a secure password. 
// 1. Prompt the user for the minimum length. "What's the minimum length?"
// 2. The number of special characters "How many special characters?"
// 3. The number of numbers "How many numbers?"
// 4. Then generate a password for the user using those inputs  "Your password is..."

const securePassword = () => {
  const minimumLength = prompt("What's the minimum length?");
  const specialCharacters = prompt("How many special characters?");
  const numberOfNumbers = prompt("How many numbers?");
  const all = minimumLength + specialCharacters + numberOfNumbers;
  let password = '';
  for (let index = 0; index < length; index++) {
    let character = Math.floor(Math.random() * all.length);
    password += all.substring(character + 1);
  }
  alert("Your password is" + '' + password);
}