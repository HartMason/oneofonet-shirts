const express = require("express");
const router = express.Router();
const shirtsController = require("../controllers/shirts");


router.get("/", shirtsController.getAllShirts)
router.get("/:id", shirtsController.getShirtsById)
router.post("/", shirtsController.postNewShirts)
router.put("/:shirt_id", shirtsController.updateShirtsbyId)
router.delete("/delete/:shirt_id", shirtsController.deleteShirtsById)


module.exports = router; 