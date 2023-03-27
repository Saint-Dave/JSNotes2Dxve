//   Currency Converter

function convertCurrency(amount, fromCurrency, toCurrency) {
    const rates = {
      USD: 1,
      EUR: 0.93,
      GBP: 0.81,
      NGN: 461.50
    };

    const amountInUSD = amount / rates[fromCurrency];
    const convertedAmount = amountInUSD * rates[toCurrency];
    return convertedAmount;
  }
  
  // Example usage:
  const convertedAmount = convertCurrency(46150, 'NGN', 'EUR');
  console.log(convertedAmount);
  
//   // Example usage
   const amount = 100;
   const fromCurrency = "USD";
   const toCurrency = "GBP";
   const convertedAmounts = convertCurrency(amount, fromCurrency, toCurrency); // convertedAmounts with an S, as you can't have same identiers oustside of functions. So i added "s"
   console.log(`${amount} ${fromCurrency} is equal to ${convertedAmounts} ${toCurrency}`);