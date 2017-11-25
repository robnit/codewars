// function snail(array) {
//   const path = [];

//   let horizontal = 0;
//   let vertical = 0;
//   let dir = 'e';

//   function addToPath(){
//     path.push(array[vertical][horizontal]);
//     array[vertical][horizontal] = undefined;
//   }

//   function advance() {
//     switch(dir){
//     case('e') :
//       horizontal++;
//       break;
//     case('s') :
//       vertical++;
//       break;
//     case('w') :
//       horizontal--;
//       break;
//     case('n') :
//       vertical--;
//       break;
//     }
//   }

//   function setDirection(){
//     switch(dir){
//     case('e') :
//       if ( array[vertical][horizontal+1] === undefined ) dir = 's';
//       break;
//     case('s') :
//       if ( array[vertical+1] === undefined || array[vertical+1][horizontal] === undefined ) dir = 'w';
//       break;
//     case('w') :
//       if ( array[vertical][horizontal-1] === undefined ) dir = 'n';
//       break;
//     case('n') :
//       if ( array[vertical+1] === undefined || array[vertical-1][horizontal] === undefined ) dir = 'e';
//       break;
//     }

//     return;
//   }

//   function checkIfDone(){
//     if (  ( array[vertical+1] === undefined || array[vertical+1][horizontal] === undefined ) &&
//           array[vertical][horizontal+1] === undefined &&
//           ( array[vertical-1] === undefined || array[vertical-1][horizontal] === undefined ) &&
//           array[vertical][horizontal-1] === undefined) 
//       return true;
//     else return false;
//   }

//   while (true) {
//     addToPath();
//     if (checkIfDone()) break;
//     setDirection();
//     advance();
//   }

//   return (path === [undefined]) ? [] : path;
   
// }

const snail = function() {
  const array = [
    [1,2,3,4],
    [4,5,6,0],
    [7,8,9,3],
    [1,2,3,4]
  ];
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
};
