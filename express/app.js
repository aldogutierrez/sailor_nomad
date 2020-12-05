
const express = require('express'); 
const app = express(); 
const port = 3001; 
const cors = require('cors')


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const db_conn = require('./dynamo_db_writer.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/googleMe', (req, res) => {
  long = req.query.long;
  lat = req.query.lat;

  gurl = "https://www.google.com/maps/@" + lat+","+long

  res.send(gurl)
})

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



