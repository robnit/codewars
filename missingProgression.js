var findMissing = function (list) {  
    console.log(list);
    console.log('first item',list[0]);
    console.log('last item',list[list.length-1]);
    console.log('list length',list.length);

    var increment = (list[list.length-1] - list[0])/list.length;
    var missingNum = 0;

    for (var i = 0; i < list.length-1; i++){
        console.log('is',list[i],'plus',increment,'not equal to ',list[i+1],'?');
        if (list[i] + increment !== list[i+1]) {
            console.log('yea');
            missingNum = list[i]+increment;
            console.log('missingNum is now',missingNum);
        }

    }

    return missingNum ;
  }