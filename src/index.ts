import express from "express";
import { PORT } from "./env";

const app = express();

app.get("/", (request: express.Request, response:express.Response)=>{
    response.send("Hola esto va funcionando")
});

app.listen(PORT,()=>{console.log(`El puerto en esccucha es el ${PORT}`)});

