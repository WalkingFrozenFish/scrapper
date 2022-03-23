const feedDisplay = document.querySelector("#feed");
const root = document.querySelector("#root");
const news = document.querySelector("#news");
const scrapper = document.querySelector("#scrapper");
const noscrapper = document.querySelector("#notscrapper");

news.addEventListener("click", () => {
    fetch("http://localhost:8000/result")
        .then(response => response.json())
        .then(data => {
            feedDisplay.innerHTML = "";
            data.forEach(item => {
                const articleItem = `<div class="item"><h3>${item.title}</h3><a target="_blank" href="${item.url}">Read///</a></div>`;
                feedDisplay.insertAdjacentHTML("beforeend", articleItem);
            });
        })
        .catch(err => console.log(err))
})

root.addEventListener("click", () => {
    fetch("http://localhost:8000")
        .then(response => response.json())
        .then(data => {
            feedDisplay.innerHTML = "";
            feedDisplay.insertAdjacentHTML("beforeend", data);
        })
        .catch(err => console.log(err))
})

scrapper.addEventListener("click", () => {
    fetch("http://localhost:8000/scrapper")
        .then(response => response.json())
        .then(data => {
            feedDisplay.innerHTML = "";
            feedDisplay.insertAdjacentHTML("beforeend", data);
        })
        .catch(err => console.log(err))
})

notscrapper.addEventListener("click", () => {
    fetch("http://localhost:8000/notscrapper")
        .then(response => response.json())
        .then(data => {
            feedDisplay.innerHTML = "";
            feedDisplay.insertAdjacentHTML("beforeend", data);
        })
        .catch(err => console.log(err))
})