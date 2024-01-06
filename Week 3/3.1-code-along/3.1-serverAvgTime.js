// Class assignment at 55:37
// Find average time your server is taking to handle requests

const assert = require('assert');
const express = require('express');

const app = express();

let startTime;
let totalTimeTaken = 0;
let requestCount = 0;

app.use((req, resp, next) => {
    startTime = Date.now();

    resp.on("finish", ()=> {
        requestCount++;
        let timeTaken = Date.now() - startTime;
        console.log(`${req.method} ${req.originalUrl} ${timeTaken} ms`)
        totalTimeTaken += timeTaken
    })
    next();
})

app.get('/slow', (req, res) => {
    setTimeout(() => {
        res.status(200).json({ msg: 'slow request completed' });
    },5000)
});

app.get('/fast', (req, res) => {
  res.status(200).json({ msg: 'fase request completed' });
});

app.get('/AvgResponseTime', function(req, res) {
  res.status(200).json({ serverAvgRespTime : `${totalTimeTaken/(1.0*requestCount)} ms` });
});

app.use((req, resp, next) => {
    resp.status(404).send("Route not found")
})
app.listen(3000)
module.exports = app;