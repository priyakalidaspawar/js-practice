const accountId = 144553
let accountEmail = "priya@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "pp@pp.com"
accountPassword = "21212121"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

