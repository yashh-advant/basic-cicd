import express from 'express';
const app = express();

app.use((req, res) => {
  res.send({
    message: 'This is version 1.2',
  });
});

app.listen(3000);
