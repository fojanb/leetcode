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
function handleSubmit(e) {
  e.preventDefault();
  data.romanNumber = e.target.RomanNumber.value;
  data.integerNumber.dispatchEvent(new CustomEvent("convert"));
}
function displayInteger() {
  let romanToArray = data.romanNumber.split("");
  let total = 0;
  // i.e. ['V', 'I', 'M', 'L', 'I', 'X']
  romanToArray.map((letter, index) => {
    if (letter === "I") {
      //   Check for next letter if it is "V" or "X"
      switch (romanToArray[index + 1]) {
        case "V":
          total += data.romanLetters.V - data.romanLetters.I;
          break;
        case "X":
          total += data.romanLetters.X - data.romanLetters.I;
          break;
        default:
          total += data.romanLetters.I;
      }
    }
    if (letter === "X") {
      //   Check for next letter if it is "L" or "C"
      switch (romanToArray[index + 1]) {
        case "L":
          total += data.romanLetters.L - data.romanLetters.X;
          break;
        case "C":
          total += data.romanLetters.C - data.romanLetters.X;
          break;
        default:
          total += data.romanLetters.X;
      }
    }
    if (letter === "C") {
      //   Check for next letter if it is "D" or "M"
      switch (romanToArray[index + 1]) {
        case "D":
          total += data.romanLetters.D - data.romanLetters.X;
          break;
        case "M":
          total += data.romanLetters.M - data.romanLetters.X;
          break;
        default:
          total += data.romanLetters.C;
      }
    }
    // ------------
    switch (letter) {
      case "V":
        total += data.romanLetters.V;
        break;
      case "L":
        total += data.romanLetters.L;
        break;
      case "D":
        total += data.romanLetters.D;
        break;
      case "M":
        total += data.romanLetters.M;
        break;
      default:
        return total;
    }
  });
  data.integerNumber.innerHTML = `<div class="rnumber">${total}</div>`;
}
data.integerNumber.addEventListener("convert", displayInteger);
data.form.addEventListener("submit", handleSubmit);
