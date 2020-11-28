const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

router.route("/").get(getProducts);

// @desc  Fetch single products

// @route  GET /api/products/:id

// @access Public
router.route("/:id").get(getProductById);

module.exports = router;
