const express = require('express')
const badili = express()

const pesa_url = 'https://free.currencyconverterapi.com/api/v5/currencies';


//register a service worker
if ('serviceWorker' in navigator){

  navigator.serviceWorker.register('./sw.js', {scope: './'}).then(function(reg)
{
  console.log(`Resistration ok ${reg.scope}`);
}).catch(function(error){
  console.log('Resistration failed bruh ${error}');
})

}

//using fetch get all the currencies from the apiKey
fetch (pesa_url).then(response =>{
  if (response.status ! == 200){
    console.log(`Something went wrong ${response.status}`);
    return ;
  }
  response.json().then(currencies={
    //console.log(currencies);
    let fromCurrency = document.getElementById('fromCurrency');
    let toCurrency = document.getElementById('toCurrency');

    for ( const id in currencies[currency]){
      fromCurrency.innerHTML += ``
      toCurrency.innerHTML
    }
  })
})
//maths to convertPesa (cnvert Money)
function convertPesa(e, currencies){
  //get the items from the user input
  let amount = document.getElementById('amountInput');
  let fromCurrency = document.getElementById('fromCurrencyInput');
  let toCurrency = document.getElementById('toCurrencyInput');
  let inputId = chance.getId();

  let request = {
    "id":inputId,
    "amount":amount,
    "fromCurrency":fromCurrency,
    "toCurrency":toCurrency
  }

}
