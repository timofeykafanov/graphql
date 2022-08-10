const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, err => {
  err ? console.log(error) : console.log('Server started!');
})