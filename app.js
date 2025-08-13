// app.js
// Minimal Express app for ECS Fargate

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(' for checking psddsadfasfdasfjsdjhfahjakhkdfafasjkjadsfhdmsndmnsdadfakhdfaafaurpose');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});