const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app= express();
const userRouter = require('./routes/user');
const linkRouter = require('./routes/link');
const itemRouter = require('./routes/item');
const roleRouter = require('./routes/role');
const uomRouter = require('./routes/uom');
const itemtypeRouter =require('./routes/itemtype');
const priceRouter = require('./routes/price');
const stockRouter=require('./routes/stock');
const requestRouter=require('./routes/request');
const finacialyearRouter=require('./routes/finacialyear');
const contractorRouter=require('./routes/contractor');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/links', linkRouter);
app.use('/items', itemRouter);
app.use('/roles', roleRouter);
app.use('/uoms', uomRouter);
app.use('/itemtypes',itemtypeRouter);
app.use('/prices', priceRouter);
app.use('/stock', stockRouter);
app.use('/requests', requestRouter);
app.use("/financialyears",finacialyearRouter);
app.use("/contractors", contractorRouter);

const PORT=3000;

// Set up a PostgreSQL connection pool

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});