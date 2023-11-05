"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:3001'
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use('/products', product_routes_1.default);
exports.app.use((0, morgan_1.default)('combined'));
