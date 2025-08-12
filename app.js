// app.js
// Minimal Express app for ECS Fargate

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Sample App runnadfasdfasing on ECS Fargate! added  added pipeline and chec   king whether a pipeline is working or not ');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});