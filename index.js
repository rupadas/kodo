const express = require('express');
const typeSenseService = require('./typeSenseService');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/collections', async (req, res) => {
    const collection = await typeSenseService.fetchCollection();
    if (!collection.length > 0) {
        await typeSenseService.createCollection();
        await typeSenseService.createDocument();
    }
    res.send({
        status: true
    });
});

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const collection = await typeSenseService.searchCollection(query);
    res.send({
        data: collection
    });
});