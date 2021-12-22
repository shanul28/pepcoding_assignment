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
    let hisArr = $(".toclevel-1.tocsection-1");

    let newUrl = $(hisArr[0]).find("a").attr("href");

    let hisUrl = url + newUrl;
    if (newUrl === "#History") {
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
    let newHisArr = $(".hatnote.navigation-not-searchable");
    let names = $(newHisArr[4]).text();
    let pp = $("p");

    console.log("History\n" + "Origin\n" + names);
    for (let i = 2; i < 10; i++) {
        let nn = $(pp[i]).text();
        console.log(nn);
    }
}