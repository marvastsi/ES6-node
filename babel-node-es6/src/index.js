import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello world from ES6 School of Net.');


}).listen(3000, '127.0.0.1');