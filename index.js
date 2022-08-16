const express = require('express');
const app = express()
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        message: 'Hello World',
        data: { name: 'John Doe' },
        status: 200,
        timestamp: new Date()
    });
    next();
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));