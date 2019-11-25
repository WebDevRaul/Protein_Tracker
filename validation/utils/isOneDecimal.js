const isOneDecimal = data => {
  if(!data.includes('.')) return false;
  // Split the data
  const result = data.split('.');
  const [ number, decimals ] = result;
  if(decimals > 10) return true;
}

module.exports = isOneDecimal;