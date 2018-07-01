const https = require('https')

function convertCurr(quantity, fromCurrency, toCurrency, cb){
  let apiKey = '';
  let fromCurrency = encodeURIComponent(fromCurrency);
  let toCurrency = encodeURIComponent(toCurrency);
  let query = fromCurrency + '_'+toCurrency;

  let url = 'https://www.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra&apiKey=' + apiKey;
  https.get(url,function(res){
    let body = '';

    res.on('data', function(chunk){
      body +=chunk;
    });
    res.on('end', function(){
      try{
         let jsonObject = JSON.parse(body);
         let value = jsonObject[query];
         if (value){
           let total = value * quantity;
           cb(null, Math.round*100)/100);
         }else{
           let err = new Error(`value not found for ${query}`);
         }
      }catch (e){
        console.log(`Parse error: ${e}`);
      }
    });
  }).on('error',function(e){
    console.log("Got an error: ", e);
  });

}

convertPesa(10,'USD','PHP',function(err,amount)){
  console.log(amount);
}
