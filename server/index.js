const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('response is sent!');
  res.send('hello world!');
});
app.listen(PORT, () => {
  console.log('GSC port is listening at ', PORT);
});
