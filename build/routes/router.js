"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const handle_1 = require("../handlers/handle");
const formHandler_1 = require("../handlers/formHandler");
const router = express_1.default.Router();
exports.router = router;
router.get("/gregorio", handle_1.Handler.salute);
router.post("/formulario", formHandler_1.Handlerformulario.returnEmail);
