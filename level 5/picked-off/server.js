const express = require('express');
const app = express();
const addPropertyMiddleware = require('./middleware');

app.use(addPropertyMiddleware);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is a sample response object!' });
});

const port = process.env.PORT || 8020
app.listen(port, () => {
    `Express app is listening on port ${port}`
})