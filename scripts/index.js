// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML= navbar();

import {appendNews,newsClicked} from "./fetch.js"


showSidebarNews("in");


// url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}`



async function showSidebarNews(id){
let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`

let res= await fetch(url)

let data= await res.json();

let reqdata= data.articles;

console.log(reqdata)

let container= document.querySelector("#results");

appendNews(reqdata,container);

}

// function appendNews(data,container,func){
//     container.innerHTML= null;
//     data.forEach(function(ele){
//         let box= document.createElement("div");
//         box.setAttribute("class","news");
            // box.addEventListener("click",function(){func(ele)})


//         let image= document.createElement("img");
//         image.src= ele.urlToImage;

//         let title=  document.createElement("h3");
//         title.innerText= ele.title;

//         let desc= document.createElement("p");
//         desc.innerText= ele.description;

//         box.append(image,title,desc);
//         container.append(box);
//     })
// }

function countryNews(id){
    document.getElementById(id).addEventListener("click",function(){showSidebarNews(id)});
}

countryNews("in");
countryNews("ch");
countryNews("us");
countryNews("uk");
countryNews("nz");



// india :- in
//     china :- ch
//     usa :- us
//     uk : uk
//     Newzeland :- nz

function sendToSearchPage(e){
    if(e.key=="Enter")
    {
        let querySearched= document.querySelector("#search_input").value;
        localStorage.setItem("querySearched",JSON.stringify(querySearched));
        window.location.href= "search.html";
    }
}

document.querySelector('#search_input').addEventListener("keydown",sendToSearchPage)