import http from 'http';
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.end('Hello WAD2!');
});

server.listen(port);

console.log(`server running on port ${port}`);

