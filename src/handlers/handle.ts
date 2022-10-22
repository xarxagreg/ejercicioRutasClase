import express from "express";
export class Handler{
    static salute(request:express.Request, response:express.Response){

response.send("Reto conseguido")
    }
}