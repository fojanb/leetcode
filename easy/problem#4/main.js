const data = {
  form: document.querySelector("#form"),
  romanNumber : "",
};

const romanToInt = (e) => {
  e.preventDefault();
  romanNumber = e.target.RomanNumber.value;
  console.log(romanNumber)

};

data.form.addEventListener("submit", romanToInt);
