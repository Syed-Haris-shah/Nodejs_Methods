import { createServer } from 'http';

const PORT = 3000

const myServer = createServer((req, res) => {

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

        });

    } else if (METHOD === 'POST' && URL === '/api/items'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedData = JSON.parse(body);
            console.log('Data received:', parsedData);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully!', data: parsedData}));
        
        });

    } else if (METHOD === 'PUT' && URL === '/api/items/2'){
        let body = '';
        // console.log(URL)
        const itemID = URL.split('/').pop() 
        console.log(`itemID: ${itemID}`)
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // const parsedData = JSON.parse(body);
            // console.log('Data received:', parsedData);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `Data received successfully! ${itemID}` }));
        });
        
    } else if (METHOD === 'DELETE' && URL.startsWith('/api/items/')) {
        
        let items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ];
        let body = '';
        const itemID = parseInt(URL.split('/').pop());
        
        const itemIndex = items.findIndex(item => item.id === itemID);
    
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
            
            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: `Item with ID ${itemID} deleted successfully!`, items }));
            });
            
        } else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found!');
    }
}
});

myServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});