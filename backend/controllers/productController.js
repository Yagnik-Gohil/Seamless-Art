const multer = require("multer");
const sharp = require("sharp");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(
      new AppError("Not an image! Please upload only images.", 400),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductImage = upload.single("image");

exports.sharp = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  if (req.file) {
    req.file.filename = `product-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/images/${req.file.filename}`);
    next();
  } else if (req.body.isUpdate) {
    return next();
  } else {
    return next(new AppError("Please upload an image", 401));
  }
});

exports.addProduct = catchAsync(async (req, res, next) => {
  req.body.image = req.file.filename;
  const doc = await Product.create(req.body);
  res.status(201).json({ status: "success", data: doc });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const doc = await Product.find();
  res.status(200).json({ status: "success", totalResults: doc.length, doc });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById({ _id: id });
  res.status(200).json({ status: "success", data: product });
});
