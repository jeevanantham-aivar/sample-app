// app.js
// Minimal Express app for ECS Fargate

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Sample App running on ECS Fargate! added codepipeline, added pipeline and checking whether a pipeline is working or not ');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});