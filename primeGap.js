function gap(g, m, n) {
  let prime = {
    gap: this.first - this.last,
    first: null,
    last: null
  };
  
  function isPrime(n) {
    //Math.ceil(n/2)?
    let number = Math.ceil(n/2);
    while (number > 1) {
      if (n % number === 0) return false;
      number--;
    }
    return true;
  }
  
  while(m < n) {

    if (isPrime(m) && !prime.first) {
      prime.first = m;
      prime.gap = 0;
    }
    else if (isPrime(m) && !prime.last) {
      prime.last = m;
      prime.gap = prime.last - prime.first;
    }
    
    if (prime.gap === g) break;
    else if (isPrime(m) && !!prime.last && !!prime.first) {
      prime.last = null;
      prime.first = m;
    }
    m++;
  }
  
  return (prime.gap === g) ? [prime.first, prime.last] : null;
  
}