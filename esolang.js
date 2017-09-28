function interpreter(code, tape) {

    console.log('code is',code);
    console.log('tape is',tape);
    let tapeArray = tape.split('');
    let tapeIndex = 0;
    let codeIndex = 0;
    code = code.split('');

    function flip (array,index){
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

    while (tapeIndex < tape.length && tapeIndex < tape.length && codeIndex > -1 && codeIndex < code.length){

      switch (code[codeIndex]){
        case '*': flip(tapeArray,tapeIndex);  break;
        case '>': tapeIndex++;  break;
        case '<': tapeIndex--; break;
        case '[': 
        case ']': if ( tapeArray[tapeIndex] === '0' ){ 
          debugger
          code[codeIndex] === '[' ? codeIndex = findMatchingBracket(codeIndex, code) + 1 : findMatchingBracket(codeIndex, code);
          }
        break;
        
      }//end of switch
      codeIndex++;
    }
    console.log('answer is',tapeArray.join(''));
    return (tapeArray.join(''));

  }

  // Test.assertEquals(interpreter("*>*[>*>*>*]>*>*>*", "00101100"), "11010011");


//   [ - Jump past matching ] if value at current cell is 0
//   ] - Jump back to matching [ (if value at current cell is nonzero)


//   Test.describe("Your Interpreter", function () {
//     Test.it("should work for some example test cases", function () {
//       // Flips the leftmost cell of the tape
//       Test.assertEquals(interpreter("*", "00101100"), "10101100");
//       // Flips the second and third cell of the tape
//       Test.assertEquals(interpreter(">*>*", "00101100"), "01001100");
//       // Flips all the bits in the tape
//       Test.assertEquals(interpreter("*>*>*>*>*>*>*>*", "00101100"), "11010011");
//       // Flips all the bits that are initialized to 0
//       Test.assertEquals(interpreter("*>*>>*>>>*>*", "00101100"), "11111111");
//       // Goes somewhere to the right of the tape and then flips all bits that are initialized to 1, progressing leftwards through the tape
//       Test.assertEquals(interpreter(">>>>>*<*<<*", "00101100"), "00000000");
//     });
//   });