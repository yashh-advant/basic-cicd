import express from 'express';
const app = express();

app.use((req, res) => {
  res.send({
    message: 'Hello bhavik please tell him to leave',
  });
});

app.listen(3000);
