const express = require('express');
const app = express();
app.use(express.json());
let products = [];

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

app.listen(5001, () => console.log('Product service running on port 5001'));