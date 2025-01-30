const express = require('express');
const app = express();
const PORT = 2222;

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(n); i++) {  // Check divisibility up to the square root of 'n'
        if (n % i === 0) return false; // If 'n' is divisible by any number, it's not prime
    }
    return true; // Return true if no divisors were found, meaning 'n' is prime
}

// Endpoint to check if a number is prime
app.get('/assignments/prime/:n', (req, res) => {
    const n = parseInt(req.params.n, 10); // Parse the number from the URL parameter
    if (isNaN(n)) { // Check if the provided value is not a valid number
        return res.status(400).json({ error: 'Invalid number provided' });
    }

    const result = isPrime(n); // Check if the number is prime

    // Return the result as a JSON response
    res.json({ isPrime: result });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
