const isOneDecimal = data => {
  if(!data.includes('.')) return false;
  // Split the data
  const result = data.split('.');
  // eslint-disable-next-line
  const [ number, decimals ] = result;
  if(decimals > 10) return true;
}

export default isOneDecimal;