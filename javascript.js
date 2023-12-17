const sumInput = document.querySelector("#sum");
const exchangeRateInput = document.querySelector("#exchange-rate");
const resultElement = document.querySelector(".amount");
const buttonsContainer = document.querySelector(".elem__operation-buttons");

const getNumericValue = (inputElement) => {
    const inputValue = inputElement.value.replace(/\s/g, '').replace(/,/g, '.');
    if (inputValue === "" || isNaN(+inputValue)) {
        return false;
    }
    return +inputValue;
}

const calculateCurrency = (amount, exchangeRate) => {
    resultElement.innerHTML = amount * exchangeRate + " грн";
}

const clearInputsAndResult = () => {
    sumInput.value = "";
    exchangeRateInput.value = "";
    resultElement.innerHTML = "";
}

buttonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("operation-count") && getNumericValue(sumInput) !== false && getNumericValue(exchangeRateInput) !== false) {
        let amount = getNumericValue(sumInput);
        let exchangeRate = getNumericValue(exchangeRateInput);
        calculateCurrency(amount, exchangeRate);
    } else if (e.target.classList.contains("operation-delete")) {
        clearInputsAndResult();
    }
});
