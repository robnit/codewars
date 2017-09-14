function interpreter(code, tape) {
    // Implement your interpreter here
    console.log('code is',code);
    console.log('tape is',tape);
    tapeArray = tape.split('');
    tapeIndex = 0;
    jumpIndex = [];

    function flip (array,index){
      array[index] === '0' ? array[index] = '1' : array[index] = '0';
    }

    code.split('').forEach(function(codeElement,index){ //Refactor to while loop for (code[index] < code.length)
      debugger
      switch (codeElement){
        case '*': flip(tapeArray,tapeIndex); break;
        case '>': tapeIndex++; break;
        case '<': tapeIndex--; break;
        case '[': jumpIndex.push(tapeIndex); tapeIndex++; break;
        case ']': if (tapeArray[tapeIndex] === '0') {
          tapeIndex = jumpIndex[0];
          jumpIndex.shift();
          break;
         } else {
           tapeIndex++; 
           break;
        }
      }//end of switch
    }//end of forEach
  )
    return (tapeArray.join(''));

  }



  interpreter(">>[>>>*]<*<<*", "00101100");
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