function appendNews(data,container){
    container.innerHTML= null;
    data.forEach(function(ele){
        let box= document.createElement("div");
        box.setAttribute("class","news");
        box.addEventListener("click",function(){newsClicked(ele)});

        let image= document.createElement("img");
        image.src= ele.urlToImage;
        image.setAttribute("class","imageClass");

        let titleDiv= document.createElement("div");
        titleDiv.setAttribute("class","titleDiv");

        let title=  document.createElement("h3");
        title.innerText= ele.title;

        let desc= document.createElement("p");
        desc.innerText= ele.description;


        titleDiv.append(title,desc)
        box.append(image,titleDiv);
        container.append(box);
    })
}

function newsClicked(ele){
    localStorage.setItem("news",JSON.stringify(ele));
    window.location.href="news.html";
}

export {appendNews,newsClicked}