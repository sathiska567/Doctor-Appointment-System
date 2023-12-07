const express = require("express");
const {  getAllUsersController,  getAllDoctorsController,  changeAccountStatusController,} = require("../controller/adminCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// //GET METHOD || USERS
// router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", getAllDoctorsController);

//POST ACCOUNT STATUS
router.post("/changeAccountStatus" ,changeAccountStatusController );

module.exports = router;