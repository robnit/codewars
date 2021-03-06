function interpreter(code, tape) {
    let tapeIndex = 0;
    let codeIndex = 0;
    tape = tape.split('');
    code = code.split('');

    function flip ( array,index ){
      array[index] === '0' ? array[index] = '1' : array[index] = '0';
    }

    function findMatchingBracket(currentIndex, myArray) {
      let leftBrackets = 0;
      let rightBrackets = 0;
      let increment = 0;
      switch ( myArray[currentIndex] ){
        case '[':
          leftBrackets = 1;
          increment = 1;
          break;
        case ']':
          rightBrackets = 1;
          increment = -1;
      }
      do {
        currentIndex += increment;
        switch ( myArray[currentIndex] ){
          case ']':
            rightBrackets++;
            break;
          case '[':
            leftBrackets++;
            break;
          default:
            break;
        }
      } while (leftBrackets !== rightBrackets)
      return currentIndex;
    }

    do {
      switch ( code[codeIndex] ){
        case '*': flip(tape,tapeIndex);  break;
        case '>': tapeIndex++;  break;
        case '<': tapeIndex--; break;
        case '[': 
        if ( tape[tapeIndex] === '0' ){ 
          codeIndex = findMatchingBracket(codeIndex, code);
          }
        break;
        case ']': 
        if ( tape[tapeIndex] === '1' ){ 
          codeIndex = findMatchingBracket(codeIndex, code);
          }
        break;
      }
      codeIndex++;
    } while (tapeIndex < tape.length && tapeIndex > -1 && codeIndex > -1 && codeIndex < code.length)

    return (tape.join(''));
  }