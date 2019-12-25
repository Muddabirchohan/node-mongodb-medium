const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


app.use('/user',userRoutes)

mongoose.connect('mongodb://localhost/userdb', {useNewUrlParser: true});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))