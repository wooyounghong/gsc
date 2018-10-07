const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const root = path.normalize(__dirname + '/..');

// express middleware
app.use(express.static(root + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api', (req, res) => {
// console.log('/GET api route');
// res.sendFile(path.resolve(`${__dirname}/..`))
//   res.send('here is api route');
// });
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../public/dist/index.html`));
// });

// /GET/ to Homepage;
app.get('/', (req, res) => {
  console.log('req received at homepage');
  res.sendFile(path.join(root, '/public/dist/templates/homepage/index.html'));
});

app.listen(PORT, () => {
  console.log('GSC port is listening at ', PORT);
});
