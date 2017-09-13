function updateAccounts(accounts, logons){


var ac = accounts.Accounts;
var log = logons.Logons;

//Sort logons chronologically
log.sort(function(a,b) {return a.Date.getTime() > b.Date.getTime() } );

function addNewAccounts( ac, log ){
//Search log and add any new account ID to ac
log.forEach( function(logElement){
  if ( ac.filter( function(acElement){ return acElement.Id === logElement.Id}).length === 0 ) {
    let newAccount =  {};
    newAccount.Id = logElement.Id;
    newAccount.Name = logElement.Name;
    newAccount.LogonCount = 0; 
    newAccount.LastLogon = logElement.Date;
    ac.push( newAccount ); }
});
}

addNewAccounts( ac, log);

//debugger
//for each logon item, search accounts for matching ID. Uptick logon count. If Date is more recent,
//LastLogon. 
log.forEach ( function(logElement){
    ac.forEach ( function(acElement){
        if (acElement.Id === logElement.Id){
            acElement.LogonCount++;
            console.log('is',logElement.Name,logElement.Date.getTime(),'greater than',acElement.Name,acElement.LastLogon.getTime(),'?');
            if (logElement.Date.getTime() > acElement.LastLogon.getTime()){
                console.log('yeah');
                acElement.LastLogon = logElement.Date;
                //if logonElement.name is present, update it to acElement.name
                if (logElement.Name) {
                    acElement.Name = logElement.Name;
                }
            }
        }
    });
});

console.log('ac is',ac);
console.log('log is',log)

ac.sort(function(currentValue,currentValue2){
    return  currentValue.Id - currentValue2.Id
    });

return  { "Accounts" : ac}
}


var logons = {
    "Logons": [
        {
            "Id": 21,
            "Name": "",
            "Date": new Date(2017, 1, 24, 22, 13, 16, 241)
        }
    ]
};
var accounts = {
    "Accounts": [
        {
            "Id": 21,
            "Name": "John Shepherd",
            "LogonCount": 13,
            "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
        }
    ]
};
var expected = {
    "Accounts": [
        {
            "Id": 21,
            "Name": "John Shepherd",
            "LogonCount": 14,
            "LastLogon": new Date(2017, 1, 24, 22, 13, 16, 241)
        }
    ]
};