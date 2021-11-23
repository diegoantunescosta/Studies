const express = require('express');
const app = express();

app.use((req,res,next )=> {
  res.status(200).send({
    message: 'API implementada com sucesso'
  })
});

module.exports = app;