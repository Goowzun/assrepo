const express = require('express');
const app = express();
const port = 3333;


function calculateFactorial(number) {
  if (number < 0) return "Factorial not defined for negative numbers";
  if (number === 0 || number === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}


app.get('/assignments/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number);

  
  if (isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number' });
  }

  
  const result = calculateFactorial(number);
  res.json({ factorial: result });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
