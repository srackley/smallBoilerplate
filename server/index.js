const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const path = require('path');
const morgan = require('morgan');

const app = express();


module.exports = app
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use(morgan('tiny'))
.use(express.static(resolve(__dirname, '..', 'public')))
.use('/api', require('./api'))
.use((req, res, next) =>
  (path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next()))
.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.'));

    const PORT = 3001;
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
