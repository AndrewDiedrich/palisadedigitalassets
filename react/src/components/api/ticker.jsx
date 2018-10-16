import React from "react";


/* Example in Node.js ES6 using request-promise, concepts should translate to your language of choice */
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 2,
    convert: 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});



export default Ticker;