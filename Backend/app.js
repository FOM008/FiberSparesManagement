const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
const userRoutes = require('./routes/user');
const linkRoutes = require('./routes/link');
const itemRoutes = require('./routes/item');
const roleRoutes = require('./routes/role');
const uomRoutes = require('./routes/uom');
const itemtypeRoutes =require('./routes/itemtype');
const priceRoutes = require('./routes/price');
const stockRoutes=require('./routes/stock');
const requestRoutes=require('./routes/request');
const finacialyearRoutes=require('./routes/finacialyear');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.use('/users', userRoutes);
app.use('/links', linkRoutes);
app.use('/items', itemRoutes);
app.use('/roles', roleRoutes);
app.use('/uoms', uomRoutes);
app.use('/itemtypes',itemtypeRoutes);
app.use('/prices', priceRoutes);
app.use('/stock', stockRoutes);
app.use('/requests', requestRoutes);
app.use("/financialyears",finacialyearRoutes);


const PORT=3000;

// Set up a PostgreSQL connection pool

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});