let char = "9";
if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
  console.log(char + " is an alphabet.");
} else if (char >= "0" && char <= "9") {
  console.log(char + " is a digit.");
} else {
  console.log(char + " is a special character.");
}
