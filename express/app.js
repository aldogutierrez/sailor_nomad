
const express = require('express'); 
const app = express(); 
const port = 3001; 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



