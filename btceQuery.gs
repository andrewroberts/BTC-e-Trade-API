// Make a query using the BTC-e.com Trade API.

function btceTrade_Query(method, params) { // TODO - Need to add req back for other TAPI methods

  // API settings
  var apiKey = API_KEY; // your API-key
  var secret_hex = SECRET_VALUE; // your Secret-key from profile
  
  // Create an object for the params if one hasn't been passed in.
  if (params === undefined) {
    
    params = new Object();
  }
  
  // Add the method to the POST payload object.
  params.method = method;
  
  var microTime = microTime_().split(' ');
  
  // Add a timestamp (nonce) to the POST payload object.
  params.nonce = microTime[1];
  
  Logger.log('params: ' + dump_(params, 2));
  
  // Generate the POST data string.
  var post_data = httpBuildQuery_(params, '', '&');
  
  Logger.log('post_data: ' + post_data);
  
  // I tried to do this with GAS Utilities but couldn't get it and the 
  // forums say there is a bug in there, so just copied the CryptoJS
  // library into the script.

  // Getting a hex value manually from http://caligatio.github.io/jsSHA gets 
  // as far as checking the nonce, but I've also confirmed with the PHP version 
  // that you can't manually put in the figures.
  
  var sign = String(CryptoJS.HmacSHA512(post_data, secret_hex));
  
  Logger.log("sign: " + sign);
  
  // generate the extra headers
  var headers = {'sign': sign, 'key': apiKey};
  
  var options = {
    "headers": headers,
    "method": "post",
    "payload": post_data, 
  };
 
  Logger.log('optinos: ' + dump_(options,1));
  
  var response = UrlFetchApp.fetch("https://btc-e.com/tapi/", options); 
  
  Logger.log('UrlFetch Response: ' + response.getContentText());
 
  if (!response) {
    
    throw new Error('Could not get response from btc-e.com');
    
  }
  
  // Convert the JSON returned into an object
  var decode = Utilities.jsonParse(response);
  
  Logger.log('JSON Parse result: ' + dump_(decode,1));
  
  if (decode.success == false) {
    
    // This will get output so let it finish.
    // throw new Error('Query - ' + method + ' failed. Error: ' + decode.error);
    
  }
  
  return decode;
}
