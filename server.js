const fs = require("fs");
const https = require("https");
const express = require("express");
const history = require("connect-history-api-fallback");

var app = express();
app.use(history());

app.get("/", function(req, res) {
  res.send("hello world");
});

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(process.env.PORT || 3000, function() {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });
