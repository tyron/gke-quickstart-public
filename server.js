const express = require('express')
const os = require('os')

const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Success`);
});

app.route('/').get((req, res) => {
    res.send('nothing here');
});