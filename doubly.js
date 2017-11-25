function doubly(n) {
  let m = n;
  while(true) {
    console.log('checking ', m);
    if (checkIfDoubly(m)) break;
    else m = String(parseInt(m,10) + 1);
  }

  function checkIfDoubly(m) {
    const reversedM = m.split('').reverse().join('');
    return (Number(m) >= Number(n) && parseInt(reversedM, 10) >= Number(n)) ? true : false;
  }

  return String(m);
}
//99999999999999999999888888888888877777777777777777766666666666655555555555555555444444444444444 returns 99999999999999999999888888888888877777777777777777766666666666655555555555999999999999999999999


//5314 returns 5316
