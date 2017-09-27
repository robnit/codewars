function interpreter(code, tape) {

    console.log('code is',code);
    console.log('tape is',tape);
    tapeArray = tape.split('');
    tapeIndex = 0;
    code = code.split('');
    codeIndex = 0;
    jumpIndex = [];

    function flip (array,index){
      array[index] === '0' ? array[index] = '1' : array[index] = '0';
    }

    function leftBracketCounter (currentIndex, rightBracketIndex){
      code.splice(currentIndex + 1, rightBracketIndex).filter(a => { return a === '[' } ).length;
    }

debugger
    while (tapeIndex !== tape.length && tapeIndex < tape.length && codeIndex > -1 && codeIndex < code.length){

      switch (code[codeIndex]){
        case '*': flip(tapeArray,tapeIndex);  break;
        case '>': tapeIndex++;  break;
        case '<': tapeIndex--; break;
        case '[': tapeArray[tapeIndex] === '0' ? codeIndex = code.indexOf(']', codeIndex) + 1 : jumpIndex.push(codeIndex); break;
        case ']': if (tapeArray[tapeIndex] === '1') {
          codeIndex = jumpIndex[jumpIndex.length - 1] - 1;
          jumpIndex.pop();
          break;
         } 
      }//end of switch
      debugger
      codeIndex++;
    }
    console.log('answer is',tapeArray.join(''));
    return (tapeArray.join(''));

  }
  // TODO: Make case ']' accept nested brackets
// [esfef [sdfsd [sdfsdfsd] sdfs] sdf]


  interpreter("*[>[*]*>]>", "00000000000000000000000000000000000000");

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