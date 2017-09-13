function pickPeaks(arr){
    console.log('array is',arr);
    let allPeaks = [];

  let allPositions = arr.map(function(a, index){
      console.log('is',a,'greater than',arr[index-1],'and',arr[index+1],'?');
      if (a > arr[index-1] && a > arr[index+1]){
          console.log('yea');
          return index;
      }
      else if (a === arr[index+1] && arr[index-1] < a) {
          let i = 1;
          while (a === arr[index + i]){
              i++;
              if (a > arr[index + i]) {return index;}
              if (a < arr[index + i]) {return undefined;}
          }
      }
      console.log('no');
  }).filter(function(a){return a !== undefined});

  allPositions.map(function(a){
      allPeaks.push(arr[a]);
  });

    console.log('all positions is',allPositions);
    console.log('all peaks is', allPeaks);
    return {pos:allPositions,peaks:allPeaks};
  }

  
    // given [1,3,4,5,5,5,3,2,1] , return 3
    // [ 2, 1, 3, 2, 2, 2, 2, 1 ]
