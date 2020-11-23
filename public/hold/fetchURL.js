// https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
const fetch = require('node-fetch');

let url = "https://www.reddit.com/r/popular.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
    });