// RANDOM PASSWORD GENERATOR CODE

function generatePassword(length) {
  const charset = "aeiouPQRST13579&*[)$";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

// Example usage:
const password = generatePassword(10); // generates a 12-character password
console.log(password); // outputs a random password