// Assignment Code
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

function getpasswordOptions() {
  var length = parseInt(
    prompt("How many characters do you want your password to have?")
  ) 
if (Number.isNaN(length)) {
  alert("Password length must be a number.");
  return null;
}
if (length < 8) {
  alert("Password is too short.");
  return null;
}
if (length > 129) {
  alert("Password length is too long.");
  return null;
}

var hasNumber = confirm("Click ok to confirm using numeric characters");
var hasUppercaseLetters = confirm("Click ok to confirm using uppercase letters");
var hasLowercaseLetters = confirm("Click ok to confirm using lowercase letters");
var hasSpecialCharacters = confirm("Click ok to confirm using special characters");

if (
  hasNumber === false && hasUppercaseLetters === false && hasLowercaseLetters === false && hasSpecialCharacters === false
)
 {
alert("Please choose correct characters");
return null;  
}
var passwordOptions = {
  length: length,
  hasNumbers: hasNumbers,
  hasLowercaseLetters: hasLowercaseLetters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasUppercaseLetters: hasUppercaseLetters
}
return passwordOptions;

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
