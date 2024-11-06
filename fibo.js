const express = require('express');
const app = express();

const PORT = 1111;

function getFibonacciSequence(n) {
  const sequence = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}

app.get('/assignments/fibonacci/:n', (req, res) => {
 
  const n = parseInt(req.params.n);

  
  if (isNaN(n) || n <= 0) {
    return res.status(400).json({ error: "Please provide a positive integer for 'n'." });
  }

 
  const sequence = getFibonacciSequence(n);

  
  res.json({ sequence });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});