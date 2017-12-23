function gap(g, m, n) {
  let lastPrime = null;
  
  function isPrime(n) {
    if (n === 1) return false;
    else if (n <= 3) return true;
    else if (n % 2 === 0 || n % 3 === 0) return false;

    let number = 4;
    while (number < Math.floor(n/3)) {
      if (n % number === 0) return false;
      number++;
    }
    return true;
  }
  
  while(m < n) {
    if (isPrime(m)) {
      if (m - lastPrime === g) break;
      else lastPrime = m;
    }
    m++;
  }

  return (m - lastPrime === g) ? [m - g, m] : null;
  
}