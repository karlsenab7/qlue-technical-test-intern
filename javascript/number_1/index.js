const fs = require('fs');
const axios = require('axios')
const express = require('express');
const app = express();

function getJsonData(filename) {
    // Get json data from local file
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

app.get('/getRawData', function (req, res) {
    const data = getJsonData("data.json");
    res.json(data);
});

app.get('/getParsedData', function (req, res) {
    axios
        .get("http://localhost:3000/getRawData")
        .then(function (response) {
            // to get data from a local file use getJsonData(filename)
            // const data = getJsonData("data.json");
            const data = response.data;
            const parsedData = parseData(data);
            res.json(parsedData);
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(3000, function (req, res) {
    console.log("Server is running at port 3000");
});

