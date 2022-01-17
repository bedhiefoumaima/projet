const express = require("express");
const {Create, Update , Delete, GetUserCart, GetAll} = require ("../controllers/cart.controllers");
const router = express.Router();



router.post("/", Create)
router.put("/:id", Update)
router.delete("/:id",  Delete)
router.get("/find/:userId", GetUserCart)
router.get("/",  GetAll)

module.exports = router;

