const express = require('express');
const app = express();

const PORT = 1111;

// Function to calculate Fibonacci sequence
function getFibonacciSequence(n) {
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);  // Add the current Fibonacci number
    [a, b] = [b, a + b];  // Update values for next term
  }

  return sequence;
}

// Endpoint to get Fibonacci sequence for 'n' terms
app.get('/assignments/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n);  // Get the 'n' value from URL

  // Validate the input to ensure it's a positive integer
  if (isNaN(n) || n <= 0) {
    return res.status(400).json({ error: "Please provide a positive integer for 'n'." });
  }

  const sequence = getFibonacciSequence(n);  // Generate the Fibonacci sequence
  res.json({ sequence });  // Return the sequence in JSON format
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
