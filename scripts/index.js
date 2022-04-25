// Store the wallet amount to your local storage with key "amount"

function read (a)
{
    return document.getElementById(a).value
}

let wallet =JSON.parse(localStorage.getItem("amount")) || []
document.getElementById("add_to_wallet").addEventListener("click",addToWallet)
function addToWallet()
{  document.getElementById("wallet").innerHTML= null;
    let amount = read("amount")
    wallet.push(amount)
    localStorage.setItem("amount",JSON.stringify(wallet))
    let sum=0;
for(let i=0; i<wallet.length; i++)
{
    sum += +wallet[i];
}
  document.getElementById("wallet").append(sum)
console.log(sum)
}
//console.log(wallet)
