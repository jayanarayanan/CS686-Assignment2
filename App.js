const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post("/submit", (req, res) => {
    const data = req.body;
    const jsonData = JSON.stringify(data);

    // Append data to a text file
    fs.appendFile("data.txt", jsonData + "\n", (err) => {
        if (err) throw err;
        console.log("Data saved to file");
    });

    res.send("Data saved successfully!");
});

app.listen(port, "localhost", () => {
    console.log(`App listening on port ${port}`);
});
