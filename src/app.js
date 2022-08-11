const formEl =   document.getElementById("form");
const  buyerAmount = document.getElementById('buyer-amount');
const currencyAgainst = document.getElementById('to-currency');
const currencyFor = document.getElementById('from-currency');
const submitBtn = document.getElementById('btn');

const currencyName = document.getElementById('currency-name');
const currencyAmount = document.getElementById('currency-amount');

const convertAmount = document.getElementById('convert-amount');
const convertCurrency = document.getElementById('convert-currency');

// Crypto currency against Dollar
function dollarToCrypto(){
    // get index of each element
    let selectedOption2 = currencyFor.selectedIndex;
    let selectedOption1 = currencyAgainst.selectedIndex;
    // if the currency are the same
    if(selectedOption1 === selectedOption2){
        return buyerAmount.value * 1;
    }

    // from bitcoin to dollar
    if(selectedOption2 === 0 && selectedOption1 === 2){
        return  buyerAmount.value * 21000;
    }
    // From usd to bitcoin
    if(selectedOption2 === 2 && selectedOption1 === 0){
        return  buyerAmount.value / 21000;
    }
    // From Etherium to usd
    if(selectedOption2 === 1 && selectedOption1 === 2){
         return buyerAmount.value * 15000;
    }
    // From usd to etherium
    if(selectedOption2 === 2 && selectedOption1 === 1){
        return buyerAmount.value / 15000;
    }
}

//1 Bitcoin (BTC) =12.80362037 Ethereum (ETH)
// 1 Ethereum (ETH) =0.07810291 Bitcoin (BTC)
//1 Ethereum (ETH) = 1,5000 United States Dollar "$" (USD)
function EtherToCurrency(){
    // get index of each element
    let selectedOption2 = currencyFor.selectedIndex;
    let selectedOption1 = currencyAgainst.selectedIndex;
    // if the currency are the same
    if(selectedOption1 === selectedOption2){
        return buyerAmount.value * 1;
    }

    // from bitcoin to Etherium
    if(selectedOption2 === 0 && selectedOption1 === 1){
        return  buyerAmount.value * 12.80362037 ;
    }
    // From etherium to bitcoin
    if(selectedOption2 === 1 && selectedOption1 === 0){
        return  buyerAmount.value * 0.07810291 ;
    }
    // From Etherium to usd
    if(selectedOption2 === 1 && selectedOption1 === 2){
        return buyerAmount.value * 15000;
    }
    // From usd to etherium
    if(selectedOption2 === 2 && selectedOption1 === 1){
        return buyerAmount.value / 15000;
    }
}


formEl.addEventListener('change',function(){
    currencyAmount.innerText = buyerAmount.value;
    currencyName.innerText = currencyFor.value;
    convertCurrency.innerHTML = currencyAgainst.value;
    convertAmount.innerHTML = dollarToCrypto() || EtherToCurrency();
})
