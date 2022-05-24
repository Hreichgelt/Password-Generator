// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
// the following variables are the ingredients needed to create a random password
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();
  var passwordIngredients = "";

  var input = parseInt(prompt("Choose a lenght between 8 and 128"));
  // User should select a range between 8 and 128
  // the entire if statement has to go under the var input so it runs in sequential order.
  // we need to add !isNaN to prevent it from accepting non numbers
  if (input >= 8 && input <= 128 && !isNaN(input)) {
  } else {
    alert("ah ah ahh, whats the magic word?");
    // return stops the loop from continuing. 
    return ""
  }
  // using confirm here so the user only has yes or no as options
  // The following allows the user to select which ingredients they would like in their password
  var inputNum = confirm("Would you like to use numbers?");
  var inputSpecial = confirm("Would you like to use special characters?");
  var inputCapital = confirm("Would you like to use capital letters?");
  var inputLower = confirm("Would you like to use lowercase letters?");
console.log(input)

  // if the user selects yes they want numbers, we add it to the passwordingredients variable 
  if(inputNum) {
    passwordIngredients += numbers;
  } 
  // if the user selects no, they do not want special characters, it will not be added to the password ingredients
  if(inputSpecial) {
    passwordIngredients += special;
  }
  if(inputCapital) {
    passwordIngredients += uppercase;
  }
  if (inputLower) {
    passwordIngredients += lowercase
  }
  if (passwordIngredients.length === 0) {
    alert("Please select at least one type of characters")
    return ""
  }
  // get a random character from out string
  // after we get the random character 
  // we add it to the generated password
  // Sasha helped figure out for loop by adding arithmatic elements 
  var generatedPassword = "";
  for (var i = 0; i < input; i++) {
    var randomNumber = Math.floor(Math.random() * passwordIngredients.length)
    generatedPassword += passwordIngredients[randomNumber];
    
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
