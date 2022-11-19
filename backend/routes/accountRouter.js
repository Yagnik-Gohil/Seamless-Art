const express = require("express");
const authController = require("../controllers/authController");
const accountController = require("../controllers/accountController");

const router = express.Router();

router.route("/").get(authController.protect, accountController.getUserDetails);
router
  .route("/")
  .patch(
    authController.protect,
    accountController.uploadUserPhoto,
    accountController.resizeUserPhoto,
    accountController.updateUserData
  );
router
  .route("/updatePassword")
  .patch(authController.protect, authController.updatePassword);

module.exports = router;
