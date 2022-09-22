let convertBtn = document.querySelector(".btn");
let result = document.querySelector(".result");
convertBtn.addEventListener("click", addDecimal);

// for getting a decimal number
function getDecimal(binary) {
  binary = document.querySelector("#binary").value;
  binary = binary.toString().split("");

  let check = binary.every((num) => num == "0" || num == "1");
  if (check) {
    let length = binary.length;
    let ans = 0;
    let i = 0;
    while (i < length) {
      if (binary[i] == 1) {
        let num = length - 1 - i;
        ans += 2 ** num;
      }
      i++;
    }
    return `Decimal Number : ${ans}`;
  } else {
    return `Number is not Binary Number!!! Please enter a Valid Number..`;
  }
}

// for adding decimal number
function addDecimal(convert) {
  result.textContent = getDecimal(binary);
  return convert.preventDefault();
}
