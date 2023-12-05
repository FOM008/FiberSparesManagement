const express = require('express');
const router = express.Router();
const spare = require('../models/spares')

  
// OrderListView
router.get('/spares', async (req, res, next) => {
  try {
    const query = req.query.q;
    const sort = req.query.sort;
 
    let spares;
    if (sort) {
      spares = await Spares.find().sort(sort);
    } else if (query) {
      spares = await Spares.find({
        $or: [
          { circuitID: { $regex: query, $options: 'i' } },
          { mrr: { $regex: query, $options: 'i' } },
          // Add more fields to search as needed
        ],
      });
    } else if (req.params.name) {
      const name = req.params.name;
      spares = await Spares.find({
        $or: [
          { circuitID: { $regex: name, $options: 'i' } },
          { mrr: { $regex: name, $options: 'i' } },
          // Add more fields to search as needed
        ],
      });
    } else {
      orders = await Spares.find();
    }
 
    res.render('orders/list', {
      object_list: orders,
      query: req.query.q,
      now: new Date(),
      count: orders.length,
    });
  } catch (error) {
    next(error);
  }
});
 
// OrderPersonalListView
router.get('/orders/personal', async (req, res, next) => {
  try {
    const query = req.query.q;
    const user = req.user; // Assuming you have user information available in the request
 
    let orders;
    if (query) {
      orders = await Spares.find({
        $and: [
          { circuitID: { $regex: query, $options: 'i' } },
          { assignee_user_username: user.username },
        ],
      });
    } else if (req.params.name) {
      const name = req.params.name;
      orders = await Spares.find({
        $and: [
          { circuitID: { $regex: name, $options: 'i' } },
          { assignee_user_username: user.username },
        ],
      });
    } else {
      orders = await Spares.find({ assignee_user_username: user.username });
    }
 
    res.render('orders/list_personal', {
      object_list: orders,
      query: req.query.q,
      now: new Date(),
      count: orders.length,
    });
  } catch (error) {
    next(error);
  }
});
 
// Export CSV
router.get('/export_csv', async (req, res, next) => {
  try {
    const orders = await Spares.find();
    const data = orders.map(order => ({
      circuitID: order.circuitID,
      mrr: order.mrr,
      custname: order.custname,
      service: order.service,
      media: order.media,
      bandwidth: order.bandwidth,
      region: order.region,
      assignee: order.assignee,
      partnerID: order.partnerID,
      // Add more fields as needed
    }));
 
    const csv = parse(data);
    const filename = `tracker_data_${new Date().toISOString()}.csv`;
 
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csv);
  } catch (error) {
    next(error);
  }
});
 
// OrderDetailView
router.get('/orders/:uuid', async (req, res, next) => {
  try {
    const order = await Spares.findOne({ _id: req.params.uuid });
 
    if (!order) {
      throw new Error("Order doesn't exist");
    }
 
    const now = new Date();
    const next_ = req.query.next;
    const next_post = req.body.next;
    const redirect_path = next_ || next_post || null;
 
    res.render('spares/detailed', {
      obj: order,
      now,
      next_url: redirect_path,
    });
  } catch (error) {
    next(error);
  }
});
 
module.exports = router;