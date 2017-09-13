function balanceStatements(list){
    console.log('list is',list);
    list = list.split(', ');
    var buy = 0;
    var sell = 0;
    var badlyFormed = [];
    console.log('badly formed initialize, length is',badlyFormed.length);

    function formTest(a){
        return RegExp(/[A-Z]*[\s][\d]*[\s][\d]*[\.][\d]*[\s][B|S]/).test(a);
    }

    list.map(function(x){
        if (formTest(x)){
            x = x.split(' ');
            switch (x[3]){
                case 'B':
                    buy += ( Number(x[1]) * Number(x[2]) );
                    break;
                case 'S':
                    sell += ( Number(x[1]) * Number(x[2]) );
                    break;
            }
        } else if (x) {
            badlyFormed.push(x);
        }
    })

    console.log('buy is ',buy);
    console.log('sell is',sell);
    console.log('badlyFormed is',badlyFormed);
    console.log('badlyFormed length is',badlyFormed.length)
    if (badlyFormed.length > 0) {
        return ('Buy: ' + Math.ceil(buy) + ' Sell: ' + Math.ceil(sell) + '; Badly formed ' + badlyFormed.length + ': ' + badlyFormed.join(' ;') + ' ;');
    } else {
        return ('Buy: ' + Math.ceil(buy) + ' Sell: ' + Math.ceil(sell));
    }
  }