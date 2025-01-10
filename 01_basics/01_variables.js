const accountId = 144553               // const --> values can't be changed 
let acountEmail = "hitesh@google.com"  // let can be changed
var accountPassword = "12345"          // var can also be changed but is may face many issue (see notes)
accountCity = "Jaipur"                 // we can declare var without using any keyword but this is nt recommended
let accountState;                      // declare but didn't assign anything -> gives undefine output


// accountId = 2 //not allowed

accountEmail = "abhijeet@google.com"
accountPassword = "21212121"
accountCity = "Bihar"

console.log(accountId);

/* Prefer not to use var
coz. of issue in block scope and functional scope (will talk about it later)
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])