function solve(n,k){
  let gcd = n;
  let results = [];

  function factorial(interval, count = k){
    let increment = interval;
    let acc = 0;
    while (count > 0) {
      acc += increment;
      increment += interval;
      count--;
    }
    return acc;
  }

  if (factorial(1) > n) return [];

  while (true) {
    if (factorial(gcd) <= n){
      let diff = n - factorial(gcd, k-1);
  
      if (diff%gcd === 0) {
        let temp = gcd;
        for (let i = 0; i < k-1; i++) {
          results.push(temp);
          temp += gcd;
        }
        results.push(diff);
      }
  
      else {
        let temp = gcd;
        for (let i = 0; i < k; i++) {
          results.push(temp);
        }
      }

      if (results.reduce((a,c)=> a+c) === n) break;
      results = [];
    }
    gcd--;
  }

  return results;
}