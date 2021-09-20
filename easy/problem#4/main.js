const data = {
  form: document.querySelector("#form"),
  romanNumber: "",
  integerNumber: document.querySelector(".IntegerNumber"),
  romanLetters: {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  },
};
function romanToInt(e) {
  e.preventDefault();
  data.romanNumber = e.target.RomanNumber.value;
  data.integerNumber.dispatchEvent(new CustomEvent("convert"));
}
function displayInteger() {
  let romanToArray = data.romanNumber.split("");
  // i.e. ['V', 'I', 'M', 'L', 'I', 'X']
  romanToArray.map((letter) => {
    switch (letter) {
        case 'I':
            
            case 'X':
                case 'C'
    }
  });
  data.integerNumber.innerHTML = `<div class="rnumber">${romanToArray}</div>`;
}
data.integerNumber.addEventListener("convert", displayInteger);
data.form.addEventListener("submit", romanToInt);
