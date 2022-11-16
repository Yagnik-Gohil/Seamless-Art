const express = require("express");
const authController = require("../controllers/authController");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").get(productController.getAll);
router
  .route("/add")
  .post(
    authController.protect,
    productController.uploadProductImage,
    productController.sharp,
    productController.addProduct
  );

module.exports = router;
