const fs = require('fs')

//read from files
fs.readFile( './blog.txt',(err,res) => {
    if (err)  {
        console.log(err)
    }
    console.log(res.toString())
})
//write to file 

fs.writeFile('./blog.txt','i love nodejsi can do anything',(err,res) =>{
    console.log('written')
})
//directory
//created folder
if (!fs.existsSync('./img')) {
    fs.mkdir('./img',(err,res) =>{
        if (err) console.log(err)
        console.log('folder created')
    } )
}
//delete folder

//directory
//created folder
if (fs.existsSync('./img')) {
    fs.rmdir('./img',(err,res) =>{
        if (err) console.log(err)
        console.log('folder deleted')
    } )
}

