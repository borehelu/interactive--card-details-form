const cvc = document.querySelector(".cvc");
const cardNo = document.querySelector(".card-no");
const cardName = document.querySelector(".card-name");
const cardExpiryMonth = document.querySelector(".expiry-month");
const cardExpiryYear = document.querySelector(".expiry-year");
const inputName = document.getElementById("name");
const inputNumber = document.getElementById("number");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputCVC = document.getElementById("cvc");
const cardForm = document.querySelector(".card-input-form");
const success = document.querySelector(".success");
const submitBtn = document.getElementById("submit-btn");


submitBtn.addEventListener("click", function (e) {
  let card_name = inputName.value;
  let card_number = inputNumber.value;
  let card_month = inputMonth.value;
  let card_year = inputYear.value;
  let card_cvc = inputCVC.value;
 
  if(validate(card_name, inputName) && validate(card_number, inputNumber) && validate(card_month, inputMonth) && validate(card_year, inputYear) && validate(card_cvc, inputCVC) ){
    cardForm.style.display = "none";
    success.style.display = "flex";
  }
});

inputName.onkeyup = function (e) {
  let card_name = inputName.value;
  cardName.textContent = card_name;
};

inputNumber.onkeyup = function (e) {
  let card_number = inputNumber.value;
  cardNo.textContent = addPadding(card_number);
};

inputCVC.onkeyup = function (e) {
  let card_cvc = inputCVC.value;
  cvc.textContent = card_cvc;
};

inputMonth.onkeyup = function (e) {
  let card_month = inputMonth.value;
  cardExpiryMonth.textContent = card_month;
};

inputYear.onkeyup = function (e) {
  let card_year = inputYear.value;
  cardExpiryYear.textContent = card_year;
};

function addPadding(text) {
  let newText = [];

  for (let i = 0; i < text.length; i++) {
    newText.push(text[i]);
    if (i === 3 || i === 7 || i === 11) {
      newText.push(" ");
    }
  }

  return newText.join("");
}

function validate(value, userInput) {
  if (isBlank(value)) {
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
    userInput.nextElementSibling.innerHTML = "Can't be blank";
    return false;
  }
  if (userInput !== inputName) {
    if (!isRightFormat(value)) {
      userInput.style.border = "2px solid hsl(0, 100%, 66%)";
      userInput.nextElementSibling.innerHTML = "Wrong format, numbers only";
      return false;
    }

    if (userInput === inputNumber) {
      if (value.length < 16) {
        userInput.style.border = "2px solid hsl(0, 100%, 66%)";
        userInput.nextElementSibling.innerHTML = "16 Characters required";
      }
    }
  }
  userInput.nextElementSibling.innerHTML = "";
  return true;
}

function isBlank(inputValue) {
  if (inputValue.length === 0) {
    return true;
  }
  return false;
}

function isRightFormat(inputValue) {
  inputValue = Number(inputValue);
  return Boolean(inputValue);
}
