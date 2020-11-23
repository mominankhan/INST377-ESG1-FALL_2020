// https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
const request = require('request');

let url = "https://www.reddit.com/r/popular.json";

let options = {json: true};



request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
        // do something with JSON, using the 'body' variable
    };
});