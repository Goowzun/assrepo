const express = require('express');
const app = express();
const port = 3333;

// Function to calculate the factorial of a number
function calculateFactorial(n) {
  // If the number is negative, factorial is not defined
  if (n < 0) return "Factorial not defined for negative numbers";
  
  // Factorial of 0 or 1 is 1
  if (n === 0 || n === 1) return 1;
  
  // Initialize the factorial result to 1
  let factorial = 1;
  
  // Loop to calculate factorial by multiplying each number up to 'number'
  for (let i = 2; i <= n; i++) {
    factorial *= i; // Multiply the current factorial by 'i'
  }

  // Return the calculated factorial
  return factorial;
}

// Endpoint to calculate the factorial of a given number
app.get('/assignments/factorial/:n', (req, res) => {
  // Get the 'number' parameter from the URL and parse it as an integer
  const n = parseInt(req.params.n);

  // Input validation: check if the 'number' is a valid integer
  if (isNaN(n)) {
    return res.status(400).json({ error: 'Please provide a valid number' });
  }

  // Call the factorial function to calculate the result
  const result = calculateFactorial(n);

  // Return the result as a JSON response
  res.json({ factorial: result });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
