// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar} from "../components/navbar.js"

document.querySelector("#navbar").innerHTML= navbar();

import {appendNews,newsClicked} from "./fetch.js"


// url = `https://masai-mock-api.herokuapp.com/news?q={query}`
let querySearched= JSON.parse(localStorage.getItem("querySearched"));
// console.log

// let query= document.querySelector("#search_input").value ;

if(querySearched!=undefined){
    // showNews();
    // console.log("kkkk")
    let url = `https://masai-mock-api.herokuapp.com/news?q=${querySearched}`

    let res= await fetch(url);

    let data= await res.json();

    let reqData= data.articles;


    let container= document.querySelector("#results");

    appendNews(reqData,container)
}





async function showNews(e){
    // console.log(e)
    if(e.key=="Enter"){
        let query= document.querySelector("#search_input").value;

        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`

        let res= await fetch(url);

        let data= await res.json();

        let reqData= data.articles;


        let container= document.querySelector("#results");

        appendNews(reqData,container)
        // console.log(reqData)


    }
    
}


document.querySelector('#search_input').addEventListener("keydown",showNews)