function miracleSort(arr) {
  const startTime = Date.now();
  console.log()
  console.log('array is', arr);
  var result = [...arr]
  var sorted = false
  do {
      sorted = true
      for (var i = 0; i < result.length; i++) {
          console.log('is', result[i], 'less than', result[i-1],'?');
          if (result[i] < result[i-1]) {
              console.log('yes');
              let temp = result[i];
              result[i] = result[i - 1];
              result[i - 1] = temp;
              sorted = false;
              console.log('about to break for-loop, array is', result);
              break;
          }
        }
  }
  while (!sorted)
  console.log('this took', Date.now() - (startTime), 'ms')
  return result
}