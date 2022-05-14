const fs = require('fs');
const express = require('express');
const app = express();

function getJsonData(filename) {
    let data = [];
    let rawdata = fs.readFileSync(filename);
    let parsedData = JSON.parse(rawdata);
    data = parsedData;

    return data;
};

function parseData(data) {
    myObj = new Object();
    myObj["h"] = ["username", "hair_color", "height"];
    myObj["d"] = [];

    data.forEach(element => {
        tempData = [];
        tempData.push(element["username"]);
        tempData.push(element["hair_color"]);
        tempData.push(element["height"]);
        myObj["d"].push(tempData);
    });

    return myObj;
}


const data = getJsonData("data.json");
const parsedData = parseData(data);

app.get('/getParsedData', function (req, res) {
    res.json(parsedData);
});


app.listen(3000, function (req, res) {
    console.log("Server is running at port 3000");
});

