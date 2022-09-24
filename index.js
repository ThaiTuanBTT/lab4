const { fstat } = require("fs");
const http = require("http");
http
    .createServer((req, res) => {

        res.statusCode = 200
        res.setHeader("Conten-Type", "text/html");
        if (req.url === "/") {
            fs.readFile("./index.html", (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    res.write(data);
                    res.end;
                }
            });
        } else if (req.url === "/greenwich") {
            fs.readFile("./greenwich.html", (err, data) => {
                if (err) {
                    consosle.log(err);
                } else {
                    res.write(data)
                    res.end;
                }
            });
        } else if (req.url === "/cloud") {
            fs.readFile("./cloud.html", (err, data) => {
                res.write(data);
                res.end;
            });
        } else {
            res.end("<h1>404: Page not found</h1>")
        }
        res.end("<h1>Heroku deployment tutorial</h1>")
    })
    .listen(process.env.PORT || 3000)