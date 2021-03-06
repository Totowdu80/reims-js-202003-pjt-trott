require('dotenv').config();
const app = require('./app');
const express = require('express');
const port = 8000;


app.listen(port, (err) => {
    if (err) {
        throw new Error(`An error occured: ${err.message}`);
    }
    console.log(`Server is listening on ${port}`);
});