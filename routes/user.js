const router = require("express").Router();


const {Update,Delete,GetUser,GetUserStat, GetAllUser} = require("../controllers/user.controller")


router.put("/:id",  Update)
router.delete("/:id", Delete)
router.get("/find/:id", GetUser)
router.get("/", GetAllUser)
router.get("/stats",  GetUserStat)


module.exports = router;