function incrementString (strng) {
    console.log('input is',strng);
    
    if (RegExp(/[0-8]/).test(strng[strng.length-1])) {
        let strIndex = strng.length-1;
        console.log('index is',strIndex);
        let stringHalf = strng.slice(0,strIndex);
        let numberHalf = strng.slice(strIndex,strng.length);
        console.log('numberHalf is',numberHalf);
        numberHalf = numberHalf.replace(/([1-8])+/, function(a){return Number(a)+1})   
        if (numberHalf[numberHalf.length-1] === "0"){
            numberHalf = numberHalf.replace(numberHalf[numberHalf.length-1], Number(numberHalf[numberHalf.length-1])+1)
        }
        return stringHalf + numberHalf;
    }
    else if (RegExp(/[9]/).test(strng)) {
      let strIndex = strng.match(/([0]+)?([1-9])+/).index;
      console.log('index is',strIndex);
      let stringHalf = strng.slice(0,strIndex);
      let numberHalf = strng.slice(strIndex,strng.length);
      console.log('numberHalf is',numberHalf);
      numberHalf = numberHalf.replace(/[0]?([1-9])+/, function(a){return Number(a)+1})
      return stringHalf + numberHalf;
    } 

    else {
    return strng + 1;
    }
  }