const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const orderDetailsController = require("../controllers/orderDetails");

router.get("/", orderDetailsController.getAllOrderDetails)
router.get("/:order_num", orderDetailsController.getOrderById)





module.exports = router;