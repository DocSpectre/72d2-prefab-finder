const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/api'));


app.listen(process.env.PORT || port, () => {
    console.log(`Server is running with port ${process.env.PORT || port}`);
});