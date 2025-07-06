const http = require('http');

const server = http.createServer(async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Здарова как дела");
    } else if (req.url === "/echo" && req.method === "POST") {
        let body = '';

        for await (const chunk of req) {
            body += chunk.toString();
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(body);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Ресурс не найден");
    }
});

server.listen(3000, () => {
    console.log("server start");
});