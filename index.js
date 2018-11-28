const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const calculate = require('prove09.js');
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/calculations', calculate.calculateRate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
