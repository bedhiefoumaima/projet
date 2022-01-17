const express=require('express');

const router = express.Router();
const {Create, Update,Delete,GetProduct} = require('../controllers/product.controller')

    
    
router.post("/",Create)
router.put("/:id", Update)
router.delete("/:id",Delete)
router.get("/find/:id", GetProduct)
router.get("/",GetAllProducts) 






module.exports=router ;





