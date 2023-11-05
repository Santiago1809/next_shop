"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controller/product.controllers");
const router = (0, express_1.Router)();
router.get('/', product_controllers_1.getProducts);
exports.default = router;
