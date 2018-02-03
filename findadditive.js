function findAdditiveNumbers(num) {
  const sequence = [];
  let index = 0;
  let number1 = 1;
  let number2 = 1;
  let newNumbers = [];
  populateNewNumbers();

  function add(x, y) {
    return (parseInt(x) + parseInt(y)).toString();
  }

  function populateNewNumbers() {
    newNumbers = [
      num.slice(index, index + number1),
      num.slice(index + number1, index + number1 + number2),
      add(num.slice(index, index+number1), num.slice(index + number1, index+(number1 + number2)))
    ];
  }

  // breaks the code somehow
  // 60647653137172137035087564579154414800123954538754662709110146371641728 
  // 337003370337067401011016850269604381070770114580185350299930

  /* findAdditiveNumber('252645267041315619860330165287685892138768224660363428588088951516')
Expected: '[\'252\', \'6452\', \'6704\', \'13156\', \'19860\', \'33016\', \'52876\', \'85892\', \'138768\', \'224660\', \'363428\', \'588088\', \'951516\']', instead got: '[]'


WHY DOES THIS NOT WORK : findAdditiveNumbers('25264526704')
  should return 252, 6452, 6704


  findAdditiveNumbers('337003370')
    should return 3370, 0, 3370
*/

  while (true) {
    if (num.slice(index + number1 + number2).startsWith(newNumbers[2])) {
      (sequence.length < 3) ? newNumbers.forEach(number => sequence.push(number)) : sequence.push(newNumbers[2]);
      index += number1;
      number1 = newNumbers[1].length;
      number2 = newNumbers[2].length;
    }
    else {
      number2++;
    }

    if (number1 === num.length) {
      return [];
    }

    if (sequence.reduce((acc, e) => acc += e.length,0) === num.length) return sequence;

    if (number2 === num.length || sequence.some( e => e.length > 1 && e.startsWith('0'))) {
      index = 0;
      sequence.length = 0;
      number1++;
      number2 = 1;
    }
    populateNewNumbers();
  }

}


// describe('Initial test',_ => {
//   Test.assertSimilar(findAdditiveNumbers('112358'),['1','1','2','3','5','8']);
//   Test.assertSimilar(findAdditiveNumbers('199100199'),['1','99','100','199']);
//   Test.assertSimilar(findAdditiveNumbers('1023'),[]);
//   Test.assertSimilar(findAdditiveNumbers('112356'),[]);
//   Test.assertSimilar(findAdditiveNumbers('101'),['1','0','1']);
//   Test.assertSimilar(,findAdditiveNumbers('198001519815')["19800", "15", "19815"]);
//   Test.assertSimilar(findAdditiveNumbers('10020120'),["100", "20", "120"]);
//   Test.assertSimilar(findAdditiveNumbers('7916972717643273704501372383'),["7916", "9727", "17643", "27370", "45013", "72383"]);
// });