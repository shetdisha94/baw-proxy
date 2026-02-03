const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/posts/:id', async (req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
  const data = await response.json();
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Proxy running on port', port));
