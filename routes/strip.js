const router = require("express").Router();
const Paiement = require=("../controllers/strip.controller")

router.post("/payment", Paiement)

module.exports = router; 
