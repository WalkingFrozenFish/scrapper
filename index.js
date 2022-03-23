const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();
const url = "https://www.theguardian.com/uk";

app.use(cors())

app.get("/", (req, res) => {
    res.json("Это ответ с сервера");
})

app.get("/scrapper", (req, res) => {
    res.json("Это скребок");
})

app.get("/notscrapper", (req, res) => {
    res.json("Это не скребок");
})

app.get("/result", (req, res) => {
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const articles = [];

            $(".fc-item__title", html).each(function () {
                const title = $(this).text()
                const url = $(this).find("a").attr("href")
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles);
        }).catch(err => console.log)
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))