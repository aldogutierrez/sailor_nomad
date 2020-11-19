
const express = require('express'); 
const app = express(); 
const port = 3001; 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


const db_conn = require('./dynamo_db_writer.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

<<<<<<< HEAD

=======
app.get('/signup', (req, res) => {
  email = req.query.email  // true
  pass = req.query.password // true

  res.send(db_conn.signup(email,pass))
})

app.get('/login', (req, res) => {
  email = req.query.email  // true
  pass = req.query.password // true

  res.send(db_conn.login(email,pass))
})
>>>>>>> f825c982dd948e0b434a714c27ef1eebed908ee0

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



