function interpreter(code, tape) {
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

    do {
      switch (code[codeIndex]){
        case '*': flip(tapeArray,tapeIndex);  break;
        case '>': tapeIndex++;  break;
        case '<': tapeIndex--; break;
        case '[': 
        if ( tapeArray[tapeIndex] === '0' ){ 
          codeIndex = findMatchingBracket(codeIndex, code);
          }
        break;
        case ']': 
        if ( tapeArray[tapeIndex] === '1' ){ 
          codeIndex = findMatchingBracket(codeIndex, code);
          }
        // debugger
        
        break;
        
      }//end of switch
      codeIndex++;
    } while (tapeIndex < tape.length && tapeIndex > -1 && codeIndex > -1 && codeIndex < code.length) //end of while
    console.log('answer is',tapeArray.join(''));
    return (tapeArray.join(''));
  }
var tape = '100';
100
var code = '*>[[]*>]<*'  
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