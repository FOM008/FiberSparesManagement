const express= require('express');
const app= express();
const User = require('./models/user');
const userRoutes = require('./routes/user');
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/users', userRoutes);

const PORT=3000;

// Set up a PostgreSQL connection pool

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});