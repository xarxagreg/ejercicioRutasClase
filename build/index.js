"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    response.send("Hola esto va funcionando");
});
app.listen(env_1.PORT, () => { console.log(`El puerto en esccucha es el ${env_1.PORT}`); });
