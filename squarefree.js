function squareFreePart(n) {

  function hasSquareFactors(num) {
    let i = Math.ceil(num/2);
    while(true) {
      if (i === 1) return false;
      if ( (Math.sqrt(i) % 1 === 0) && num%i === 0) return true;
      i--;
    }
  }

  if (typeof n !== 'number' || Number.isNaN(n) || n === Infinity || n < 1) return null;
  
  let divisor = (n < 3) ? n : Math.ceil(n/2);
  
  while (true) {
    if (divisor <= 0) return null;
    if ( !hasSquareFactors(divisor) && n%divisor === 0 ) return divisor;
    divisor--;
  }

}