const http = require("http");
http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader("Conten-Type", "text/html");
        res.end("<h1>Heroku deployment tutorial</h1>")
    })
    .listen(process.env.PORT || 3000)