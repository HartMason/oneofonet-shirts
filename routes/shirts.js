const express = require("express");
const router = express.Router();
const shirtsController = require("../controllers/shirts");

//get all t-shirts
router.get("/", shirtsController.getAllShirts)
//get all t-shirts by id

//post a t-shirt

//



module.exports = router; 