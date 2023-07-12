import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World! Umar Here')
});

app.get('/name/:myName', (req, res) => {
    const name = req.params.myName;

    console.log("🚀 ~ file: server.mjs:12 ~ app.get ~ name:", name);
  
    res.send({message: `Welcome ${name} to our Site`})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
