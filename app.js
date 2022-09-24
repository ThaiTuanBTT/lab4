const http = require("http");
http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader("Conten-Type", "text/html");
        res.end("<h1>Heroku 5000</h1>")
    })
    .listen(process.env.PORT || 5000)