const express = require('express')
const app = express()

app.use(express.static('public'))

// view engine setup
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render(index))

app.listen(3000, () => console.log('Example app listening on port 3000!'))