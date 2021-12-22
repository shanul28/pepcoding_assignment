const request = require("request");
const cheerio = require("cheerio");

let url = "https://en.wikipedia.org/wiki/S";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        handlehtml(html)
    }
}
function handlehtml(html) {
    let $ = cheerio.load(html);
    let hisArr = $(".toclevel-1.tocsection-5");

    let newUrl = $(hisArr[0]).find("a").attr("href");

    let hisUrl = url + newUrl;
    if (newUrl === "#Related_characters") {
        request(hisUrl, cbs);
    }
    console.log("second call finished");

}
function cbs(err, res, html) {
    if (err) {
        console.log(err);
    } else {
        handleHis(html);
    }
}

function handleHis(html) {
    let $ = cheerio.load(html);
    let nee = $("#Descendants_and_related_characters_in_the_Latin_alphabet").text();
    console.log(nee);
    let pp = $("li");
    console.log("Use in writing systems\n");
    for (let i = 30; i < pp.length - 10; i++) {
        let nn = $(pp[i]).text();
        console.log(nn);
    }
    console.log("Ս : Armenian letter Se");
}