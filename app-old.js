const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let output = {
            name: 'Martin',
            agee: 22,
            url: req.url

        };

        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8080);
console.log('Listening to port 8080');