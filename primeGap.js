function gap(g, m, n) {
  let time = new Date();

  let prime = {
    gap: this.first - this.last,
    first: null,
    last: null
  };
  
  function isPrime(n) {
    //Math.ceil(n/2)?
    if (n === 1) return false;
    else if (n <= 3) return true;
    else if (n%2 === 0 || n%3 === 0) return false;
    
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
  console.log('time is', time);

  console.log('new Date is ', new Date());
  console.log('yyy', time - new Date());

  return (prime.gap === g) ? [prime.first, prime.last] : null;
  
}