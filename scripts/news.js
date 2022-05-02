// Ude Import export (MANDATORY)



import {navbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML= navbar();

import {appendNews} from "./fetch.js"

let news = JSON.parse(localStorage.getItem("news"));

let container= document.querySelector("#detailed_news");

appendNews([news],container);


function sendToSearchPage(e){
    if(e.key=="Enter")
    {
        let querySearched= document.querySelector("#search_input").value;
        localStorage.setItem("querySearched",JSON.stringify(querySearched));
        window.location.href= "search.html";
    }
}

document.querySelector('#search_input').addEventListener("keydown",sendToSearchPage)