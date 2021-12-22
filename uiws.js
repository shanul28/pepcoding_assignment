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
    let hisArr = $(".toclevel-1.tocsection-4");

    let newUrl = $(hisArr[0]).find("a").attr("href");

    let hisUrl = url + newUrl;
    console.log(hisUrl);
    if (newUrl === "#Use_in_writing_systems") {
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
    let pp = $("p");
    console.log("Use in writing systems\n");
    for (let i = 10; i < pp.length; i++) {
        let nn = $(pp[i]).text();
        console.log(nn);
    }
}