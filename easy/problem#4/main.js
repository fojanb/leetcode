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
  e.target.reset();
}
function displayInteger() {
  let romanToArray = data.romanNumber.split("");
  let total = 0;
  // i.e. ['I', 'V', 'M', 'L', 'I', 'X']
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
          if (romanToArray[index - 1] !== "I") {
            total += data.romanLetters.X;
          } else {
            total = total;
          }
      }
    }
    if (letter === "C") {
      //   Check for next letter if it is "D" or "M"
      switch (romanToArray[index + 1]) {
        case "D":
          total += data.romanLetters.D - data.romanLetters.C;
          break;
        case "M":
          total += data.romanLetters.M - data.romanLetters.C;
          break;
        default:
          if (romanToArray[index - 1] !== "X") {
            total += data.romanLetters.C;
          } else {
            total += 0;
          }
      }
    }
    // ------------
    switch (letter) {
      case "V":
        if (romanToArray[index - 1] !== "I") {
          total += data.romanLetters.V;
        } else {
          total += 0;
        }
        break;
      case "L":
        if (romanToArray[index - 1] !== "X") {
          total += data.romanLetters.L;
        } else {
          total += 0;
        }
        break;
      case "D":
        if (romanToArray[index - 1] !== "C") {
          total += data.romanLetters.D;
        } else {
          total += 0;
        }
        break;
      case "M":
        if (romanToArray[index - 1] !== "C") {
          total += data.romanLetters.M;
        } else {
          total += 0;
        }
        break;
      default:
        return total;
    }
  });
  data.integerNumber.innerHTML = `<div class="rnumber">✔️ ${data.romanNumber} = ${total}</div>`;
}
data.integerNumber.addEventListener("convert", displayInteger);
data.form.addEventListener("submit", handleSubmit);
