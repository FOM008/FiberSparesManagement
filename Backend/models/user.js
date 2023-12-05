const mongoose = require('mongoose');
const { parse } = require('json2csv');

const router = express.Router();

// Defined MongoDB Schema
const spareSchema = new mongoose.Schema({
  itemcode: String,
  itemdescription: String,
  uom: String,
  openingbalance: Double,
  closingbalance: Double,
  unitcost: Double,
  quantityissued: Double,
  totalprice: Double,
  usage: Double,
});
let spare = mongoose.model("spare", spareSchema)
model.export = spare;
