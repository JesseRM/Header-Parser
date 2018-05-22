const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use('/', require('./routes/index'));


app.listen(process.env.PORT || 3000, () => {
    console.log('Listening for requests...');
});


