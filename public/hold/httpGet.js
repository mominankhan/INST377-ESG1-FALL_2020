// https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
const https = require('https');

let url = "https://www.reddit.com/r/popular.json";

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with JSON
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});