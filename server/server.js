const express = require('express'); 
const path = require('path'); 
let app = express(); 

// app.get('/', (req, res) => {
//     res.send('I am speaking to you from within the server.')
// }); 


app.use((req, res, next) => {
        console.log(req.originalUrl);  
        next(); 
})

app.use(express.static(path.join(__dirname, '../public'))); 

app.listen(3000); 