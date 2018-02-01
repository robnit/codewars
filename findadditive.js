function findAdditiveNumbers(num) {
  const sequence = [];
  let index = 0;
  let interval = 1;

  function sum(x, y) {
    return (parseInt(x) + parseInt(y)).toString();
  }


  // function findSum(index) {
    // let interval = 1;
    
    while (true) {
      console.log('does', num.slice(index + interval + 1), 'start with', sum(num[index], num[index + interval]), '?');
      if (num.length === index + interval + 1) return 'no';
      else if ( num.slice(index + interval + 1).startsWith( sum(num[index], num[index + interval])) ) return 'yes';
      interval++;
    }
  // }

/*
check first digit in '12358'
    does 1 plus 2 equal 3?
yes
move to 2
    does 2 plus 3 equal 5?
*/



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