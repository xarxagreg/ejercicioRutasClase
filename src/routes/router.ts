import express from "express";
import { Handler } from "../handlers/handle";
import { Handlerformulario } from "../handlers/formHandler";
const router=express.Router();

router.get("/gregorio",Handler.salute);
router.post("/formulario",Handlerformulario.returnEmail);

export {router}