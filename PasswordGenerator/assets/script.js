let screenEl = document.querySelector("#screen-text");
let pwdLengthEl = document.querySelector("#pwd-length");
let upperCaseEl = document.querySelector("#upperCase");
let lowerCaseEl = document.querySelector("#lowerCase");
let numberEl = document.querySelector("#number");
let symbolEl = document.querySelector("#symbol");
let generateEl = document.querySelector("#generate");
let upperCase = "ABCDEFGHIJKLMNOPRSTUVYZWQX";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^8*[(<?>)1_+. |&=+";

const getUpperCase = () => {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
};

const getLowerCase = () => {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
};

const getNumber = () => {
  return number[Math.floor(Math.random() * number.length)];
};

const getSymbol = () => {
  return symbol[Math.floor(Math.random() * symbol.length)];
};
const passwordGenerate = () => {
  let password = "";
  let sifreUzunlugu = pwdLengthEl.value;
  if (upperCaseEl.checked) {
    password += getUpperCase();
  }
  if (lowerCaseEl.checked) {
    password += getLowerCase();
  }
  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }
  for (let i = password.length; i < sifreUzunlugu; i++) {
    password += fillBlank();
  }
  screenEl.innerHTML = password;
};

const fillBlank = () => {
  let arr = [];
  if (upperCaseEl.checked) {
    arr.push( getUpperCase());
  }
  if (lowerCaseEl.checked) {
    arr.push(getLowerCase());
  }
  if (numberEl.checked) {
    arr.push(getNumber());
  }
  if (symbolEl.checked) {
    arr.push(getSymbol());
  }
  if (arr.length == 0) return"";
  return arr[Math.floor(Math.random() * arr.length)];
};

generateEl.addEventListener("click", () => {
  passwordGenerate();
});
