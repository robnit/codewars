function encrypt(text, n) {
    var textArray = text.split('');
    var myString = [];
    
   do {
      for (var i = 0; i < textArray.length; i++){
        if (i%2 === 1){
          myString.push(textArray[i]);
        }
      }
      for (var i = 0; i < textArray.length; i++){
        if (i%2 === 0){
          myString.push(textArray[i]);
          }
      }
      n--;
      
    } while (n > 0);

    myString = myString.join('');
    console.log('encrypted is',myString);
    return myString;
  }
  


  function decrypt(encryptedText, n) {
  var newString = [];
  var textArray = encryptedText.split('');
  
  for (var i = 0; i < Math.floor(textArray.length/2); i++){
    newString.push(textArray[Math.floor(textArray.length/2) + i]);
    newString.push(textArray[i]);
    console.log('first is',textArray[Math.floor(textArray.length/2) + i]);
    console.log('second is',textArray[i]);
  }
  
  newString = newString.join('');
  console.log('decrypted is', newString);

  
  }

var dog = encrypt("This is a test!", 0);

