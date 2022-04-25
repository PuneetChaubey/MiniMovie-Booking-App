// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let walletAmount = JSON.parse(localStorage.getItem("amount"))
function read (a)
{
    return document.getElementById(a).value
}
function create(c)
{
    return document.createElement(c);
}
let sum =0;
for(let i=0; i<walletAmount.length; i++)
{
    sum += +walletAmount[i];
}

document.getElementById("wallet").append(sum);
let id ;


async function searchMovies()
{
   let query = read("search");
  try{
    let url = `https://www.omdbapi.com/?apikey=2b79427&s=${query}`
    let res = await fetch(url);
    let data = await res.json();
    return data.Search
    // console.log("data :",data)
    // appendMovies(data.Search)
  }
  catch(err){
      console.log("err :",err)
  }
}
function appendMovies(d){
    document.getElementById("movies").innerHTML =null;
  d.forEach(function(el){
     let box = create("div")
     box.setAttribute("class","box");
     let img = create("img");
     img.src= el.Poster;
     let name = create("h5");
     name.innerText = el.Title;
     let btn = create("button")
     btn.setAttribute("class","book_now");
     btn.innerText = "Book Now";
     box.append(img,name,btn);
     btn.addEventListener("click",function(){
         bookMovies(el);
     })
    document.getElementById("movies").append(box)


  })
}

async function main(){
let data = await searchMovies()
if(data===undefined)
    {
        return false;
    }

    appendMovies(data);
}
function debounce(func, delay){
    if(id){
        clearTimeout();
    }
    id = setInterval(() => {
        func()
    }, delay);
}

function bookMovies(data){
    console.log("data  book :", data)
    localStorage.setItem("movie",JSON.stringify(data))
    window.location.href = "checkout.html"
}
