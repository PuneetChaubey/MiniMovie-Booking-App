// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet =JSON.parse(localStorage.getItem("amount")) || []
function read (a)
{
    return document.getElementById(a).value
}
function create(c)
{
    return document.createElement(c);
}
let walletAmount = JSON.parse(localStorage.getItem("amount"))
let sum =0;
for(let i=0; i<walletAmount.length; i++)
{
    sum += +walletAmount[i];
}
document.getElementById("wallet").innerText=sum;
let el = JSON.parse(localStorage.getItem("movie"))
let box = create("div")
box.setAttribute("class","box");
let img = create("img");
img.src= el.Poster;
let name = create("h5");
name.innerText = el.Title;

box.append(img,name);

document.getElementById("movie").append(box)
function confirmTicket()
{
   let noOfSeat = read("number_of_seats")
  if(noOfSeat*100 > sum)
  {
      alert("Insufficient Balance !")
  }
  else
  {
    alert("Booking Successful!")
    let updated_sum =(+sum - noOfSeat*100);
    document.getElementById("wallet").innerText= updated_sum;
    // wallet[0]= updated_sum;
    // localStorage.setItem("amount",JSON.stringify(wallet))
  }

}
