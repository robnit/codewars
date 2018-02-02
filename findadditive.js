function findAdditiveNumbers(num) {
  const sequence = [];
  let index = 0;
  let sum;
  let number1 = 1;
  let number2 = 1;
  let newNumbers = [];

  function add(x, y) {
    return (parseInt(x) + parseInt(y)).toString();
  }

  // '199100199'

  while (true) {
    sum = add(num.slice(index, index+number1), num.slice(index + number1, index+(number1 + number2)));
    if (num.slice(index + number1 + number2).startsWith(sum)) {
      newNumbers = [
        num.slice(index, number1),
        num.slice(index + number1, index + number1 + number2),
        sum
      ];
      newNumbers.forEach(number => sequence.push(number));
      index += number1 + number2 + sum.length;
      number1, number2 = 1;
    }
    else number2++;
  }


  // while (true) {
  //   if (index === num.length) return sequence;
  //   else if (sum(num[index], num[index + interval]) === num[index + 2*interval]) {
  //     sequence.push(num[index], num[index + interval], num[index + 2*interval]);
  //     index += 3*interval;
  //   }
  //   else return [];
  // }


}


// describe('Initial test',_ => {
//   Test.assertSimilar(findAdditiveNumbers('112358'),['1','1','2','3','5','8']);
//   Test.assertSimilar(findAdditiveNumbers('199100199'),['1','99','100','199']);
//   Test.assertSimilar(findAdditiveNumbers('1023'),[]);
//   Test.assertSimilar(findAdditiveNumbers('112356'),[]);
//   Test.assertSimilar(findAdditiveNumbers('101'),['1','0','1']);
//   Test.assertSimilar(findAdditiveNumbers('198001519815'),["19800", "15", "19815"]);
//   Test.assertSimilar(findAdditiveNumbers('10020120'),["100", "20", "120"]);
//   Test.assertSimilar(findAdditiveNumbers('7916972717643273704501372383'),["7916", "9727", "17643", "27370", "45013", "72383"]);
// });