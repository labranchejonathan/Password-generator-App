// Variables declarations

const pass = document.getElementById("password");
const generateBtn = document.getElementById("generate-password");
const resetBtn = document.getElementById("reset-password");
const copyBtn = document.getElementById("copy-password");
let textConfirm = document.querySelector(".text-confirmation");

// Function that will allow us to generate password

function generatePassword() {
  let chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/@#$%^&*()[]?!_~";
  let passLength = 10;
  let password = "";

  for (let i = 0; i < passLength; i++)
    password += chars[Math.floor(Math.random() * chars.length)];

  return password;
}

// Function that will allow us to reset the input box

function resetPassword() {
  pass.value = "";
}

function copyPassword() {
  navigator.clipboard.writeText(pass.value);
  textConfirm.innerHTML = "Password copied";
  if (pass.value === "") {
    alert("Please press the generate button first!");
    textConfirm.innerHTML = " ";
  }

  setTimeout(() => {
    textConfirm.innerHTML = "";
    pass.value = "";
  }, 2000);
}

generateBtn.addEventListener("click", () => {
  pass.value = generatePassword();
});

resetBtn.addEventListener("click", resetPassword);
copyBtn.addEventListener("click", copyPassword);
