const router = require('express').Router();

module.exports = router;

router.use('/login', require('./login'));

router.use('/', (req, res) => {
  res.status(200).send("Send API");
})

router.use((req, res, next) => {
  res.status(404).send('Not Found');
})
