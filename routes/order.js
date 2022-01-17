const router = require("express").Router();

const { Create, Update , Delete,GetUserOrders, GetAll} = require ("../controllers/order.controller")

router.post("/",  Create )
router.put("/:id",  Update)
router.delete("/:id", Delete)
router.get("/find/:userId", GetUserOrders)
router.get("/",  GetAll)

module.exports = router;

