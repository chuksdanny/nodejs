const http = require('http')

const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log('server request made')
    console.log('req.url')
    res.setHeader('Content-Type', 'text/html')

    // res.write('<h1>This Is NODEJS GUYS WELCOME HERE <h1>')
    // res.end()

    // //send html
    fs.readFile('./view/index.html', (err,data) =>{
       if (err) {
            console.log(err)
            res.end()
       }
       // res.write(data)
       res.end(data)
    })
     } )
    //local host 
    server.listen(3000, 'localhost', () => {
        console.log('server done start ooo for local host 3000')
    })
