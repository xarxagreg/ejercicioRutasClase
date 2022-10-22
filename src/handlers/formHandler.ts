import express from "express";

export class Handlerformulario{
    static returnEmail(request:express.Request, response:express.Response){

response.send("Formulario enviado")
    }
}