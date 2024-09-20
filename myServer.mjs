import { createServer } from 'node:http'

const PORT = 3000

const myServer = createServer((req, res)=>{

    // const METHOD = req.method
    const URL = req.url

    if (URL === '/') {

        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('This is Home Page.')

    } else if (URL === '/about') {
        
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('This is About Page.')

    } else if (URL === '/contact') {
        
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('This is Contact Page.')
    }
    
    else {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end('404 Page Not Found.!')
    }
})

myServer.listen(PORT,()=>{
    console.log(`port in listing on http://localhost:${PORT}`)
})