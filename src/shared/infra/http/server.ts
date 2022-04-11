import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/test", (request: Request, response: Response) => {
  return response.send("Teste");
});

app.listen(3333, () => { console.log("Server is running")});