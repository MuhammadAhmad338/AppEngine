const express = require("express");
const app  = express();

// Start the server
const PORT = parseInt(process.env.PORT) || 8080;

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.get('/helloAhmad', (req, res) => {
  res.status(200).send("Hello, Ahmad!").end();
});

app.get('/posts', (req, res) => {
  try {
    res.status(200).send("Here are all the posts!").end(); 
  } catch(error) {
    res.status(500).send(`Some error occured ${error}`).end();
  }
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});