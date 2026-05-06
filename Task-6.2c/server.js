const express = require('express');
const path = require('path');
const app = express();
const port = 4000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/add', (req, res) => {
    
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Invalid numbers');
    }

    const sum = num1 + num2;
    res.send(`Result: ${sum}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});