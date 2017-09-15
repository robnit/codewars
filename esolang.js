function interpreter(code, tape) {
    // Implement your interpreter here
    console.log('code is',code);
    console.log('tape is',tape);
    tapeArray = tape.split('');
    tapeIndex = 0;
    jumpIndex = [];
    code = code.split('');
    codeIndex = 0;

    function flip (array,index){
      array[index] === '0' ? array[index] = '1' : array[index] = '0';
    }


    while (codeIndex < code.length){
      // debugger
      switch (code[codeIndex]){
        case '*': flip(tapeArray,tapeIndex); codeIndex++; break;
        case '>': tapeIndex++; codeIndex++; break;
        case '<': tapeIndex--; codeIndex++;break;
        case '[': jumpIndex.push(codeIndex); tapeIndex++; codeIndex++; break;
        case ']': if (tapeArray[tapeIndex] === '1') {
          codeIndex = jumpIndex[jumpIndex.length - 1];
          jumpIndex.pop();
          break;
         } else {
           codeIndex++;
           break;
        }
      }//end of switch
      codeIndex++;
    }
    console.log(tapeArray.join(''));
    return (tapeArray.join(''));

  }



  interpreter("*[>*]", "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
  //"00000000")

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