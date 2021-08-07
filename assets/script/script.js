// Assignment Code
// array of numerical characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// array of uppercase characters (look up .split())
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// array of lowercase characters (look up .split())
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// array of special characters
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
//create a function that prompts the user for the password options
function getpasswordOptions() {
  var length = parseInt( // create a variable to store the length of password from the user input (look up parseInt())
    prompt("How many characters do you want your password to have?")
  ) 
if (Number.isNaN(length)) { // create a conditional statement to check if the length is an actual number
  alert("Password length must be a number.");
  return null;
} // create a conditional to check if pw length is at least 8 characters long
if (length < 8) {
  alert("Password is too short.");
  return null;
} // create a conditional to check if pw length is less than 128 characters long
if (length > 129) {
  alert("Password length is too long.");
  return null;
}
// create 4 different conditional statements to store if user password is going to use special chars, numbers, lower and upper
var hasNumber = confirm("Click ok to confirm using numeric characters");
var hasUppercaseLetters = confirm("Click ok to confirm using uppercase letters");
var hasLowercaseLetters = confirm("Click ok to confirm using lowercase letters");
var hasSpecialCharacters = confirm("Click ok to confirm using special characters");
// create a conditional statement to check if user included some type of character
if (
  hasNumber === false && hasUppercaseLetters === false && hasLowercaseLetters === false && hasSpecialCharacters === false
)
 {
alert("Please choose correct characters");
return null;  
}
var passwordOptions = {
  length: length,
  hasNumber: hasNumber,
  hasLowercaseLetters: hasLowercaseLetters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUppercaseLetters: hasUppercaseLetters
}
// return our passwordOptions
return passwordOptions; 
//Function for getting a random element from an array
}
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement;
}
function generatePassword() {
  var options = getpasswordOptions()
  var results = []
  var possibleCharacters = []
  var setCharacters = []
  if (!options) {
    return null;
  }
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    setCharacters.push(getRandom(specialCharacters))
  }
  if (options.hasLowercaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters)
    setCharacters.push(getRandom(lowercaseCharacters)) 
  }
  if (options.hasUppercaseLetters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
    setCharacters.push(getRandom(uppercaseCharacters))
  }
  if (options.hasNumber) {
    possibleCharacters = possibleCharacters.concat(numbers)
    setCharacters.push(getRandom(numbers))
  }
  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters)
    results.push(possibleCharacter)
  }
  for (let i = 0; i < setCharacters.length; i++) {
    results[i] = setCharacters[i]    
  }
  return results.join("")
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create object to store user input ex( var passOptions {length, specialChars, numericalChars, lowercase, uppercase

//return our passOptions

//Function for getting a random element from an array

//check out math.random

//function to generate a password with out user input

//create a variable and call our function so we can use data from the previous function.

// create a variable to store password

//var results []

// array to store the types of characters to include in our password

//var userPosChars = []

//array to contain at least one of each chosen type of characters to make sure at least one of every character is being used (validation)

// var gaurChar = []

//create conditional statements that add the array of characters into an array of possible characters based on our users input 

//need to push our new random characters to the guaranteed characters (lookup .concat)

//if (userOptions.specialCharacters){
  //take chars and concat
  //take characters and push(randomizationfunction(specialCharacter)) (AFTER WE RANDOMIZE)

  //create a for loop to pluck out random options object and grabbing random characters from the array of possible characters and concat them into the results variable

  //create another for loop to guarantee at least one character from each possible characters in the results 

  //take the result look up join() and turn it into a string