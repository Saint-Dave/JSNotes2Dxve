// Numbers Converter

  function convertNumber(number, fromBase, toBase) {
    const parsedNumber = parseInt(number, fromBase);
    const convertedNumber = parsedNumber.toString(toBase).toUpperCase();
    return convertedNumber;
  }
  
  // Example usage
//   const number = "10101010";
//   const fromBase = 2;
//   const toBase = 10;
  const number = "173" ;
  const fromBase = 10;
  const toBase = 16;
  const convertedNumber = convertNumber(number, fromBase, toBase);
  console.log(`${number} in base ${fromBase} is equal to ${convertedNumber} in base ${toBase}`);
  console.log(`${convertedNumber}`);