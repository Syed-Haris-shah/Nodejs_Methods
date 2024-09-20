import { createServer } from 'node:http'

const PORT = 3000

const myServer = createServer((req, res)=>{

    res.end('hello')

})

myServer.listen(PORT,()=>{
    console.log(`port in listing on http://localhost:${PORT}`)
})