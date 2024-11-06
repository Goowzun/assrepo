const express = require('express');
const app = express();
const PORT = 2222;


function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; 
    }
    return true; 
}


app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Invalid number provided' });
    }

   
    const result = isPrime(number);

   
    res.json({ isPrime: result });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
