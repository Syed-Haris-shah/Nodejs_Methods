import { createServer } from 'http';

const PORT = 3000

const server = createServer((req, res) => {

    const METHOD = req.method;
    const URL = req.url;
    // const {METHOD, URL} = req.rul

    if (METHOD === 'GET' && URL === '/api/items') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedData = JSON.parse(body);
            console.log('Data received:', parsedData);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully!', data: parsedData}));
            // try {
            // } catch (error) {
            //     res.writeHead(400, { 'Content-Type': 'application/json' });
            //     res.end(JSON.stringify({ message: 'Invalid JSON' }));
            // }
           
        });

    } else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});