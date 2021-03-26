const express = require('express');
const port = 3002;
const app = express();
const server = app.listen(port, (error) => {
    console.log(`server runing`);
});

