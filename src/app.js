const formEl = document.getElementById("form");
var buyerQuantity = document.getElementById("buyer-amount");
const btnswape = document.getElementById("btnswap");

// results
var fromCurrency = document.querySelector("#from-currency");
var toCurrency = document.querySelector("#to-currency");


const sameCurrency = () => {
    return buyerQuantity.value * 1;
};

// convert from ETH to USD vice versa
const convertToETH = () => {
    return Number(buyerQuantity.value) * 15000;
};
const convertFromETH = () => {
    return Number(buyerQuantity.value) / 15000;
};

// convert from BTC to USD vice versa
const convertToBTC = () => {
    return Number(buyerQuantity.value) * 21000;
};
const convertFromBTC = () => {
    return Number(buyerQuantity.value) / 21000;
};

/**
 *
 * @param fromCurrency
 * @param toCurrency
 * @param base
 * @returns {number}
 */
//function convert(fromCurrency, toCurrency, base = 'USD'){
const convert = (fromCurrencys, toCurrencys) => {
    if (fromCurrencys === toCurrencys || toCurrencys === fromCurrencys)
        return sameCurrency();

    if (fromCurrencys === "ETH" && toCurrencys === "USD") return convertToETH();
    if (fromCurrencys === "USD" && toCurrencys === "ETH") return convertFromETH();

    if (fromCurrencys === "BTC" && toCurrencys === "USD") return convertToBTC();
    if (fromCurrencys === "USD" && toCurrencys === "BTC") return convertFromBTC();
};

// swap button
btnswape.addEventListener("click", function () {
    let val1 =   fromCurrency.value;
    let val2 =  toCurrency.value;


    // Swap 2 value of the selection
    [val1, val2] = [val2, val1];

    fromCurrency.innerHTML = val1;
    toCurrency.innerHTML = val2;


    console.log(fromCurrency.innerHTML, toCurrency.value);
});



/*
* document.getElementById("currency-amount")
* document.getElementById("currency-name")
*
* document.getElementById("convert-amount")
* document.getElementById("convert-currency")
* */

formEl.addEventListener("change", function () {
    let result = convert(fromCurrency.value, toCurrency.value);
    let display_currency="";
    if(fromCurrency.value === "BTC" || toCurrency.value === "BTC")
        display_currency = "Bitcoin (BTC)";
    if(fromCurrency.value === "USD" || toCurrency.value === "USD")
        display_currency = "States Dollar\"$\" (USD)";
    if(fromCurrency.value === "ETH" || toCurrency.value === "ETH")
        display_currency = "Ethereum (ETH)";
    if(fromCurrency.value === toCurrency.value)
        display_currency = fromCurrency.value || toCurrency.value;




    document.getElementById("currency-amount").innerHTML=`${Number(buyerQuantity.value).toFixed(2)}`;
    //document.getElementById("currency-name").innerHTML= fromCurrency.value;
    document.getElementById("currency-name").innerHTML= display_currency;

    //document.getElementById("convert-amount").innerHTML=toCurrency.value;
    document.getElementById("convert-amount").innerHTML=display_currency;
    document.getElementById("convert-currency").innerHTML=`${result}`;

});