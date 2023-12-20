const express = require("express");
const {loginController,registerController,authController,applyDoctorController ,currentUserController,allUserController, getAllNotificationController} = require("../controller/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();

//Set routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);


// APPLY DOCTOR || POST
router.post("/apply-doctor",applyDoctorController)


// GET CURRENT USER || GET
router.get("/current-user",authMiddleware , currentUserController)

// GET ALL USER || GET
router.get("/all-user", allUserController)


// Notification Doctor || POST
router.get("/get-all-notification",authMiddleware, getAllNotificationController)





module.exports = router;