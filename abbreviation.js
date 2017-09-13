//WORKS

function abbreviate(string) {
    var finalString = [];
      function wordConverter(x){
        console.log('word is',x);

        //If word contains a hyphen
        //convert to array
        //splice into two arrays
        if (x.split('').includes('-')) {
            console.log('im in the hyphen part');
            x = x.split('');
            var wordSplit = { 
                first: x.slice(0,(x.indexOf('-'))).join(''), 
                second: x.slice((x.indexOf('-')+1),x.length).join('') 
            }
            console.log ('word converter output',wordConverter(wordSplit.first) + '-' + wordConverter(wordSplit.second));
            return wordConverter(wordSplit.first) + '-' + wordConverter(wordSplit.second);
        }


        var commaTracker2000 = 0;
        if (x[x.length - 1] === ","){
            commaTracker2000 = 1;
            x = x.split('');
            x.pop();
            x = x.join('');
        }
        if (x.length > 3){
            x = x.split('');
            var number = 0;
            for (var i = 1; i < x.length - 1; i++){
            number++;
            }
            // console.log('converted word is',x[0] + number + x[x.length - 1]);
            if (commaTracker2000 === 1) {return x[0] + number + x[x.length - 1] + ',';}
            else {return x[0] + number + x[x.length - 1];}

        } else {
            return x;
        }
      }
    
    string = string.split(' ');
    for (var j = 0; j < string.length; j++){
      finalString.push(wordConverter(string[j]));
    }
    // console.log(finalString.join(' '));
    return finalString.join(' ');
}
    abbreviate("You need, need not want, to complete this code-wars mission");